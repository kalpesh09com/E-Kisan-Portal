package com.app.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "mycart")
public class MyCart {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Id")
	private int id;
	
	@Column(name = "product_Id")
	private int productId;
	
	@Column(name = "quantity")
	private int quantity;
	
	@Column(name="user_Id")
	private int userId;
	
	@Column(name="prod_Name")
	private String prodName;
	
	@Column(name="price")
	private String price;
	
	@Column(name="image")
	private String image;

	public MyCart() {
		super();
	}

	public MyCart(int id, int productId, int quantity, int userId, String prodName, String price,String image) {
		super();
		this.id = id;
		this.productId = productId;
		this.quantity = quantity;
		this.userId = userId;
		this.prodName = prodName;
		this.price = price;
		this.image = image;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getProdName() {
		return prodName;
	}

	public void setProdName(String prodName) {
		this.prodName = prodName;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}
	
	
	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "MyCart [id=" + id + ", productId=" + productId + ", quantity=" + quantity + ", userId=" + userId
				+ ", prodName=" + prodName + ", price=" + price + ", image=" + image + "]";
	}

	
	
	
	
	
	

	
	
	
	
	



}
