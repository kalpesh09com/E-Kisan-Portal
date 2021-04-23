
package com.app.entity;

import java.text.DateFormat;

import java.text.SimpleDateFormat;
import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name = "order_details")
public class OrderDetails {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name = "Order_Id")
	private int orderId;
	
	@Column(name = "Product_Id")
	private int productId;
	
	@Column(name = "User_Id")
	private int userId;
	
	@Column(name = "Customer_Name")
	private String userName;

	@Column(name = "Phone_No")
	private long phoneno;
	
	@Column(name = "Address")
	private String address;
	
	@Column(name = "Quantity")
	private  int quantity;
	
	@Column(name = "Order_Date")
	private String orderDate;
	
	@Column(name = "Country")
	private String country;
	
	@Column(name = "State")
	private String state;
	
	@Column(name = "City")
	private String city;
	
	@Column(name = "Zip_Code")
	private int zip;
	
	@Column(name = "Status")
	private String status;
	
	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public int getOrderId() {
		return orderId;
	}

	public void setOrderId(int orderId) {
		this.orderId = orderId;
	}
	
	public int getProductId() {
		return productId;
	}

	public void setProductId(int productId) {
		this.productId = productId;
	}

	public int getUserId() {
		return userId;
	}

	public void setUserId(int userId) {
		this.userId = userId;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public long getPhoneno() {
		return phoneno;
	}

	public void setPhoneno(long phoneno) {
		this.phoneno = phoneno;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getQuantity() {
		return quantity;
	}

	public void setQuantity(int quantity) {
		this.quantity = quantity;
	}

	public String getOrderDate() {
		

		return orderDate;
	}

	public void setOrderDate(String orderDate) {
		
		Date d = new Date();
		DateFormat df = new SimpleDateFormat("yyyy/MM/dd");
		this.orderDate = df.format(d);

	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public int getZip() {
		return zip;
	}

	public void setZip(int zip) {
		this.zip = zip;
	}

	
	public OrderDetails(){
//		Date d = new Date();
//		DateFormat df = new SimpleDateFormat("dd/MM/yy");
//		this.orderDate = df.format(d);
		}
	
	public OrderDetails(int orderId, int productId, int userId, String userName, long phoneno, String address,
			int quantity,String orderDate, String country, String state, String city, int zip, String status) {
		super();
		this.orderId = orderId;
		this.productId = productId;
		this.userId = userId;
		this.userName = userName;
		this.phoneno = phoneno;
		this.address = address;
		this.quantity = quantity;
		this.orderDate = orderDate;
		this.country = country;
		this.state = state;
		this.city = city;
		this.zip = zip;
		this.status = status;
				
//		Date d = new Date();
//		DateFormat df = new SimpleDateFormat("dd/MM/yy");
//		this.orderDate = df.format(d);
	}

	@Override
	public String toString() {
		return "OrderDetails [orderId=" + orderId + ", productId=" + productId + ", userId=" + userId + ", userName="
				+ userName + ", phoneno=" + phoneno + ", address=" + address + ", quantity=" + quantity + ", orderDate="
				+ orderDate + ", country=" + country + ", state=" + state + ", city=" + city + ", zip=" + zip
				+ ", status=" + status + "]";
	}

}
