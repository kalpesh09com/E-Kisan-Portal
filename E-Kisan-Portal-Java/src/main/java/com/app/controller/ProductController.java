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

import com.app.entity.Product;
import com.app.service.ProductService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class ProductController {

	private ProductService productService;

	@Autowired
	public ProductController(ProductService productService) {
		this.productService = productService;
	}

	@PostMapping("/saveProductDetails")
	public Product saveProductDetails(@RequestBody Product product) {
		productService.saveProductDetails(product);
		return product;
	}

	@GetMapping("/getProductDetails")
	public List<Product> getProductDetails() {
		return productService.getProductDetails();

	}

	@GetMapping("/getProductById/{prodId}")
	public Product getProductById(@PathVariable int prodId) {
		return productService.getProductById(prodId);
	}

	@DeleteMapping("/deleteProductById/{prodId}")
	public String deleteProductById(@PathVariable int prodId) {
		return productService.deleteById(prodId);
	}

	@PutMapping("/updateProductById/{prodId}")
	public Product updateProduct(@PathVariable("prodId") int prodId, @RequestBody Product product) {
		Product temProduct = productService.getProductById(prodId);
		
		if (temProduct == null) {
			throw new RuntimeException("User Not Found");
		}
		temProduct.setProdName(product.getProdName());
		temProduct.setProdBrand(product.getProdBrand());
		temProduct.setProdDescription(product.getProdDescription());
		temProduct.setPrice(product.getPrice());
		temProduct.setOfferPrice(product.getOfferPrice());
		temProduct.setProdForm(product.getProdForm());
		temProduct.setQuantity(product.getQuantity());
		temProduct.setExpDate(product.getExpDate());
		temProduct.setImage(product.getImage());
		temProduct.setSizePack(product.getSizePack());
		temProduct.setOrganic(product.getOrganic());
		temProduct.setColor(product.getColor());
		temProduct.setStateOrigin(product.getStateOrigin());
		temProduct.setModelNo(product.getModelNo());
		temProduct.setPowerSource(product.getPowerSource());
		
		productService.saveProductDetails(temProduct);
		return temProduct;
	}

}
