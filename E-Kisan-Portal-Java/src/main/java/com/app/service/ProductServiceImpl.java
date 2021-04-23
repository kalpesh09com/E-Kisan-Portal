package com.app.service;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.app.dao.ProductRepository;
import com.app.entity.Product;

@Service
public class ProductServiceImpl implements ProductService {

	private ProductRepository prodrepo;

	public ProductServiceImpl(ProductRepository prodrepo) {

		this.prodrepo = prodrepo;

	}

	@Override
	public void saveProductDetails(Product product) {

		prodrepo.save(product);
	}

	@Override
	public List<Product> getProductDetails() {

		return prodrepo.findAll();
	}

	@Override
	public Product getProductById(int prodId) {
		Optional<Product> result = prodrepo.findById(prodId);

		Product product = null;
		if (result.isPresent()) {
			product = result.get();
		} else {
			throw new RuntimeException("Did not find Product  = " + prodId);
		}

		return product;
	}

	@Override
	public String deleteById(int prodId) {

		String result;
		try {

			prodrepo.deleteById(prodId);
			result = "Product Deleted Succesfully";

		} catch (Exception e) {
			result = "Product is not Deleted";
		}
		return result;
	}

	public Product updateProduct(Product product) {

		return prodrepo.save(product);
	}	

}
