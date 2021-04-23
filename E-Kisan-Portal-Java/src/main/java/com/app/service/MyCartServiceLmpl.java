package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.app.dao.MyCartRepository;
import com.app.entity.MyCart;


@Service
public class MyCartServiceLmpl implements MyCartService {
	
	private MyCartRepository myCartrepo;

	 public MyCartServiceLmpl(MyCartRepository myCartrepo) {

		this.myCartrepo = myCartrepo;

	}

	@Override
	public void saveMyCartProductDetails(MyCart myCart) {
		
	 myCartrepo.save(myCart);
	
		
	}

	@Override
	public List<MyCart> getMyCartProductDetails() {
		
		return  myCartrepo.findAll();

	}

	@Override
	public MyCart getMyCartProductById(int myCartId) {
		
		Optional<MyCart> result = myCartrepo.findById(myCartId);

		MyCart myCart = null;
		if (result.isPresent()) {
			myCart = result.get();
		} else {
			throw new RuntimeException("Did not find mycartId  = " + myCartId);
		}

		return myCart;
		
		

	}

	@Override
	public String deleteById(int myCartId) {
		
		String result;
		try {

			myCartrepo.deleteById(myCartId);
			result = "MyCart Product Deleted Succesfully";

		} catch (Exception e) {
			result = "MyCart Product is not Deleted";
		}
		return result;

		
		
	}

	@Override
	public MyCart updateMyCart(MyCart myCart) {
		
		return myCartrepo.save(myCart);
		
		
	}

	@Override
	public List<MyCart> getMyCartProductByUserId(int userId) {

//		Optional<MyCart> result = myCartrepo.findByUserId(userId);
//
//		MyCart mycart = null;
//		if (result.isPresent()) {
//			mycart = result.get();
//		} else {
//			// we did not find the user
//			throw new RuntimeException("Did not find data for userId= " + userId);
//		}
//		return (List<MyCart>) mycart;
		
		return  myCartrepo.findByUserId(userId);
		
	}

}
