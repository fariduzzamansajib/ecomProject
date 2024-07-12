package com.example.demo;

public class Transactionvarify {

//	serialnumber, mobilenumber, transactionid, transactionamount
	
	int serialnumber;
	String mobilenumber;
	String transactionid;
	double transactionamount;
	
	public Transactionvarify() {
		super();
	}

	public Transactionvarify(int serialnumber, String mobilenumber, String transactionid, double transactionamount) {
		super();
		this.serialnumber = serialnumber;
		this.mobilenumber = mobilenumber;
		this.transactionid = transactionid;
		this.transactionamount = transactionamount;
	}

	public int getSerialnumber() {
		return serialnumber;
	}

	public void setSerialnumber(int serialnumber) {
		this.serialnumber = serialnumber;
	}

	public String getMobilenumber() {
		return mobilenumber;
	}

	public void setMobilenumber(String mobilenumber) {
		this.mobilenumber = mobilenumber;
	}

	public String getTransactionid() {
		return transactionid;
	}

	public void setTransactionid(String transactionid) {
		this.transactionid = transactionid;
	}

	public double getTransactionamount() {
		return transactionamount;
	}

	public void setTransactionamount(double transactionamount) {
		this.transactionamount = transactionamount;
	}

	@Override
	public String toString() {
		return "Transactionvarify [serialnumber=" + serialnumber + ", mobilenumber=" + mobilenumber + ", transactionid="
				+ transactionid + ", transactionamount=" + transactionamount + ", getSerialnumber()="
				+ getSerialnumber() + ", getMobilenumber()=" + getMobilenumber() + ", getTransactionid()="
				+ getTransactionid() + ", getTransactionamount()=" + getTransactionamount() + ", getClass()="
				+ getClass() + ", hashCode()=" + hashCode() + ", toString()=" + super.toString() + "]";
	}
	
}
