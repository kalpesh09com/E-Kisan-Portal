package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.app.entity.MyCart;
import com.app.service.MyCartService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class MyCartController {
	
	private MyCartService myCartService;

	@Autowired
	public MyCartController(MyCartService myCartService) {
		this.myCartService= myCartService;
	}

	@PostMapping("/saveMyCartDetails")
	public MyCart saveMyCartDetails(@RequestBody MyCart mycart) {
		myCartService.saveMyCartProductDetails(mycart);
		return mycart;
	}

	@GetMapping("/getMyCartDetails")
	public List<MyCart> getMyCartProductDetails() {
		return myCartService.getMyCartProductDetails();

	}

	@GetMapping("/getMyCartProductById/{id}")
	public MyCart getMyCartProductById(@PathVariable int id) {
		return myCartService.getMyCartProductById(id);
	}
	
	@GetMapping("/getMyCartProductByUserId/{userId}")
	public List<MyCart> getMyCartProductByUserId(@PathVariable int userId) {
		return myCartService.getMyCartProductByUserId(userId);
	}

	@DeleteMapping("/deleteMyCartProductById/{id}")
	public String deleteMyCartProductById(@PathVariable int id) {
		return myCartService.deleteById(id);
	}

	@PutMapping("/updateMyCartProductById/{id}")
	public MyCart updateProduct(@PathVariable("id") int id, @RequestBody MyCart myCart) {
		
		MyCart temProduct = myCartService.getMyCartProductById(id);
		
		if (temProduct == null) {
			throw new RuntimeException("cart product Not Found");
		}
		
		//System.out.println(myCart.getQuantity());
		
		System.out.println(temProduct);

		temProduct.setQuantity(myCart.getQuantity());
		
		System.out.println(temProduct);
		
		//	System.out.println(temProduct.getQuantity());
		
		myCartService.saveMyCartProductDetails(temProduct);
		return temProduct;
	}

}
