package com.example.demo;

public class Product {
	//productid, productname, productbrand, producctategory, productunitprice, productstock
	int productid;
	String productname;
	String productbrand;
	String productcategory;
	double productunitprice;
	int productstock;
	String photos;
	
	public Product() {
		super();
	}

	public Product(int productid, String productname, String productbrand, String productcategory,
			double productunitprice, int productstock, String photos) {
		super();
		this.productid = productid;
		this.productname = productname;
		this.productbrand = productbrand;
		this.productcategory = productcategory;
		this.productunitprice = productunitprice;
		this.productstock = productstock;
		this.photos = photos;
	}

	public int getProductid() {
		return productid;
	}

	public void setProductid(int productid) {
		this.productid = productid;
	}

	public String getProductname() {
		return productname;
	}

	public void setProductname(String productname) {
		this.productname = productname;
	}

	public String getProductbrand() {
		return productbrand;
	}

	public void setProductbrand(String productbrand) {
		this.productbrand = productbrand;
	}

	public String getProductcategory() {
		return productcategory;
	}

	public void setProductcategory(String productcategory) {
		this.productcategory = productcategory;
	}

	public double getProductunitprice() {
		return productunitprice;
	}

	public void setProductunitprice(double productunitprice) {
		this.productunitprice = productunitprice;
	}

	public int getProductstock() {
		return productstock;
	}

	public void setProductstock(int productstock) {
		this.productstock = productstock;
	}

	public String getPhotos() {
		return photos;
	}

	public void setPhotos(String photos) {
		this.photos = photos;
	}

	@Override
	public String toString() {
		return "Product [productid=" + productid + ", productname=" + productname + ", productbrand=" + productbrand
				+ ", productcategory=" + productcategory + ", productunitprice=" + productunitprice + ", productstock="
				+ productstock + ", photos=" + photos + ", getProductid()=" + getProductid() + ", getProductname()="
				+ getProductname() + ", getProductbrand()=" + getProductbrand() + ", getProductcategory()="
				+ getProductcategory() + ", getProductunitprice()=" + getProductunitprice() + ", getProductstock()="
				+ getProductstock() + ", getPhotos()=" + getPhotos() + ", getClass()=" + getClass() + ", hashCode()="
				+ hashCode() + ", toString()=" + super.toString() + "]";
	}
	
	
	
	

	
}