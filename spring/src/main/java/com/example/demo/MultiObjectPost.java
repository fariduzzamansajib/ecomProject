package com.example.demo;

import java.util.List;

public class MultiObjectPost {
	List<Invoicedetail> invoicedetail;
	Invoice invoice;

	public MultiObjectPost() {
		super();
	}

	public MultiObjectPost(List<Invoicedetail> invoicedetail, Invoice invoice) {
		super();
		this.invoicedetail = invoicedetail;
		this.invoice = invoice;
	}

	public List<Invoicedetail> getInvoicedetail() {
		return invoicedetail;
	}

	public void setInvoicedetail(List<Invoicedetail> invoicedetail) {
		this.invoicedetail = invoicedetail;
	}

	public Invoice getInvoice() {
		return invoice;
	}

	public void setInvoice(Invoice invoice) {
		this.invoice = invoice;
	}

	

}
