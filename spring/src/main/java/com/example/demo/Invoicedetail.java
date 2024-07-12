package com.example.demo;

public class Invoicedetail {
	//sellid, customername, address, phonenumber, price, transection, invoicenumber
	//invoicedetailserial, productid, productname, productbrand, productcategory, productunitprice, itemquantity, itemtotalprice, invoicenumber
	int invoicedetailserial;
	int productid;
	String productname;
	String productbrand;
	String productcategory;
	double productunitprice;
	int itemquantity;
	double itemtotalprice;
    String  invoicenumber;
    
	public Invoicedetail() {
		super();
	}

	public Invoicedetail(int productid, String productname, String productbrand,
			String productcategory, double productunitprice, int itemquantity, double itemtotalprice,
			String invoicenumber) {
		super();
		this.productid = productid;
		this.productname = productname;
		this.productbrand = productbrand;
		this.productcategory = productcategory;
		this.productunitprice = productunitprice;
		this.itemquantity = itemquantity;
		this.itemtotalprice = itemtotalprice;
		this.invoicenumber = invoicenumber;
	}

	public int getInvoicedetailserial() {
		return invoicedetailserial;
	}

	public void setInvoicedetailserial(int invoicedetailserial) {
		this.invoicedetailserial = invoicedetailserial;
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

	public int getItemquantity() {
		return itemquantity;
	}

	public void setItemquantity(int itemquantity) {
		this.itemquantity = itemquantity;
	}

	public double getItemtotalprice() {
		return itemtotalprice;
	}

	public void setItemtotalprice(double itemtotalprice) {
		this.itemtotalprice = itemtotalprice;
	}

	public String getInvoicenumber() {
		return invoicenumber;
	}

	public void setInvoicenumber(String invoicenumber) {
		this.invoicenumber = invoicenumber;
	}

	@Override
	public String toString() {
		return "Invoicedetail [invoicedetailserial=" + invoicedetailserial + ", productid=" + productid
				+ ", productname=" + productname + ", productbrand=" + productbrand + ", productcategory="
				+ productcategory + ", productunitprice=" + productunitprice + ", itemquantity=" + itemquantity
				+ ", itemtotalprice=" + itemtotalprice + ", invoicenumber=" + invoicenumber + "]";
	}

	
	

}
