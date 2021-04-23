package com.app.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "product")
public class Product {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "Id")
	private int id;

	@Column(name = "Category_Id")
	private String categoryId;

	@Column(name = "Prod_Name")
	private String prodName;

	@Column(name = "Prod_Brand")
	private String prodBrand;

	@Column(name = "Prod_Description")
	private String prodDescription;

	@Column(name = "Price")
	private String price;

	@Column(name = "Offer_Price")
	private String offerPrice;

	@Column(name = "Prod_Form")
	private String prodForm;

	@Column(name = "Quantity")
	private String quantity;

	@Column(name = "Exp_Date")
	private String expDate;

	@Column(name = "Image")
	private String image;

	@Column(name = "Size_Pack")
	private String sizePack;

	@Column(name = "Organic")
	private String organic;

	@Column(name = "Color")
	private String color;

	@Column(name = "State_Origin")
	private String stateOrigin;

	@Column(name = "Model_No")
	private String modelNo;

	@Column(name = "Power_Source")
	private String powerSource;

	public Product() {
		// default constructor
	}

	public Product(int id, String categoryId, String prodName, String prodBrand, String prodDescription, String price,
			String offerPrice, String prodForm, String quantity, String expDate, String image, String sizePack,
			String organic, String color, String stateOrigin, String modelNo, String powerSource) {
		super();
		this.id = id;
		this.categoryId = categoryId;
		this.prodName = prodName;
		this.prodBrand = prodBrand;
		this.prodDescription = prodDescription;
		this.price = price;
		this.offerPrice = offerPrice;
		this.prodForm = prodForm;
		this.quantity = quantity;
		this.expDate = expDate;
		this.image = image;
		this.sizePack = sizePack;
		this.organic = organic;
		this.color = color;
		this.stateOrigin = stateOrigin;
		this.modelNo = modelNo;
		this.powerSource = powerSource;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getCategoryId() {
		return categoryId;
	}

	public void setCategoryId(String categoryId) {
		this.categoryId = categoryId;
	}

	public String getProdName() {
		return prodName;
	}

	public void setProdName(String prodName) {
		this.prodName = prodName;
	}

	public String getProdBrand() {
		return prodBrand;
	}

	public void setProdBrand(String prodBrand) {
		this.prodBrand = prodBrand;
	}

	public String getProdDescription() {
		return prodDescription;
	}

	public void setProdDescription(String prodDescription) {
		this.prodDescription = prodDescription;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getOfferPrice() {
		return offerPrice;
	}

	public void setOfferPrice(String offerPrice) {
		this.offerPrice = offerPrice;
	}

	public String getProdForm() {
		return prodForm;
	}

	public void setProdForm(String prodForm) {
		this.prodForm = prodForm;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	public String getExpDate() {
		return expDate;
	}

	public void setExpDate(String expDate) {
		this.expDate = expDate;
	}

	public String getImage() {
		return image;
	}

	public void setImage(String image) {
		this.image = image;
	}

	public String getSizePack() {
		return sizePack;
	}

	public void setSizePack(String sizePack) {
		this.sizePack = sizePack;
	}

	public String getOrganic() {
		return organic;
	}

	public void setOrganic(String organic) {
		this.organic = organic;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getStateOrigin() {
		return stateOrigin;
	}

	public void setStateOrigin(String stateOrigin) {
		this.stateOrigin = stateOrigin;
	}

	public String getModelNo() {
		return modelNo;
	}

	public void setModelNo(String modelNo) {
		this.modelNo = modelNo;
	}

	public String getPowerSource() {
		return powerSource;
	}

	public void setPowerSource(String powerSource) {
		this.powerSource = powerSource;
	}

	@Override
	public String toString() {
		return "Product [id=" + id + ", categoryId=" + categoryId + ", prodName=" + prodName + ", prodBrand="
				+ prodBrand + ", prodDescription=" + prodDescription + ", price=" + price + ", offerPrice=" + offerPrice
				+ ", prodForm=" + prodForm + ", quantity=" + quantity + ", expDate=" + expDate + ", image=" + image
				+ ", sizePack=" + sizePack + ", organic=" + organic + ", color=" + color + ", stateOrigin="
				+ stateOrigin + ", modelNo=" + modelNo + ", powerSource=" + powerSource + "]";
	}

}
