package com.example.demo;

import java.sql.Date;

public class Invoice {
//	invoiceserial, invoicenumber, invoicedate, totalquantity, totalprice, customername, customerphone, customerid

	String invoicenumber;
	String transactionnumber;
	Date invoicedate;
	double totalquantity;
	double totalprice;
	String customername;
	String customerphone;
	String customerid;
	
	public Invoice() {
		super();
	}
	public Invoice(String invoicenumber,String transactionnumber, java.sql.Date d, double totalquantity, double totalprice, String customername,
			String customerphone, String customerid) {
		super();
		this.invoicenumber = invoicenumber;
		this.transactionnumber=transactionnumber;
		this.invoicedate = d;
		this.totalquantity = totalquantity;
		this.totalprice = totalprice;
		this.customername = customername;
		this.customerphone = customerphone;
		this.customerid = customerid;
	}
	public String getInvoicenumber() {
		return invoicenumber;
	}
	public void setInvoicenumber(String invoicenumber) {
		this.invoicenumber = invoicenumber;
	}
	
	
	public String getTransactionnumber() {
		return transactionnumber;
	}
	public void setTransactionnumber(String transactionnumber) {
		this.transactionnumber = transactionnumber;
	}
	public Date getInvoicedate() {
		return invoicedate;
	}
	public void setInvoicedate(Date invoicedate) {
		this.invoicedate = invoicedate;
	}
	public double getTotalquantity() {
		return totalquantity;
	}
	public void setTotalquantity(double totalquantity) {
		this.totalquantity = totalquantity;
	}
	public double getTotalprice() {
		return totalprice;
	}
	public void setTotalprice(double totalprice) {
		this.totalprice = totalprice;
	}
	public String getCustomername() {
		return customername;
	}
	public void setCustomername(String customername) {
		this.customername = customername;
	}
	public String getCustomerphone() {
		return customerphone;
	}
	public void setCustomerphone(String customerphone) {
		this.customerphone = customerphone;
	}
	public String getCustomerid() {
		return customerid;
	}
	public void setCustomerid(String customerid) {
		this.customerid = customerid;
	}
	
	
	
	@Override
	public String toString() {
		return "Invoice [invoicenumber=" + invoicenumber + ", invoicedate=" + invoicedate + ", totalquantity="
				+ totalquantity + ", totalprice=" + totalprice + ", customername=" + customername + ", customerphone="
				+ customerphone + ", customerid=" + customerid + "]";
	}
	
	
}
