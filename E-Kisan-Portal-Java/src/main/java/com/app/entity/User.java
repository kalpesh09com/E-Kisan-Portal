package com.app.entity;


import javax.persistence.Column;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="users")
public class User {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="Id")
	private int id;
	
	@Column(name="Name")
	private String name;
	
	@Column(name="Email_Id")
	private String emailId;
	
	@Column(name="Phone_Number")
	private String phoneNumber;
	
	@Column(name="Address")
	private String address;
	
	@Column(name="Pincode")
	private int pincode;
	
	@Column(name="State")
	private String state;
	
	@Column(name="City")
	private String city;
	
	@Column(name="Adhar_Number")
	private String adharNumber;
	
	@Column(name="DOB")
	private String dob;
	
	@Column(name="Password")
	private String password;
	
	
	@Column(name="Country")
	private String country;
	
	@Column(name="Role_Id")
	private int roleId;
	
	@Column(name="Status")
	private String status;
	

	@Column(name="Image")
	private String image;

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public int getPincode() {
		return pincode;
	}

	public void setPincode(int pincode) {
		this.pincode = pincode;
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

	public String getAdharNumber() {
		return adharNumber;
	}

	public void setAdharNumber(String adharNumber) {
		this.adharNumber = adharNumber;
	}

	public String getDob() {
		return dob;
	}

	public void setDob(String dob) {
		
		this.dob = dob;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public int getRoleId() {
		return roleId;
	}

	public void setRoleId(int roleId) {
		this.roleId = roleId;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}


	public User(int id, String name, String emailId, String phoneNumber, String address, int pincode, String state,
			String city, String adharNumber,String dob, String password, String country, int roleId, String status,
			String image) {
		super();
		this.id = id;
		this.name = name;
		this.emailId = emailId;
		this.phoneNumber = phoneNumber;
		this.address = address;
		this.pincode = pincode;
		this.state = state;
		this.city = city;
		this.adharNumber = adharNumber;
		this.dob = dob;
		this.password = password;
		this.country = country;
		this.roleId = roleId;
		this.status = status;
		this.image = image;
	}


	public User() {
		// TODO Auto-generated constructor stub
	}
	

	@Override
	public String toString() {
		return "User [id=" + id + ", name=" + name + ", emailId=" + emailId + ", phoneNumber=" + phoneNumber
				+ ", address=" + address + ", pincode=" + pincode + ", state=" + state + ", city=" + city
				+ ", adharNumber=" + adharNumber + ", dob=" + dob + ", password=" + password + ", country=" + country
				+ ", roleId=" + roleId + ", status=" + status + ", image=" + image + "]";
	}

}
