package com.example.demo;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ProductDa {
	List<Product> stList;
	Connection con;
	PreparedStatement pst;
	ResultSet rs;

	public List<Product> findAllProducts() {
		stList = new ArrayList<>();
		try {
			con = DriverManager.getConnection("jdbc:mysql://localhost/shoppingdb", "root", "nclc123456");
			pst = con.prepareStatement("SELECT * FROM product");
			rs = pst.executeQuery();
			while (rs.next()) {
				stList.add(new Product(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getDouble(5),
						rs.getInt(6), rs.getString(7)));

			}

		} catch (SQLException e) {
			// TODO: handle exception
		}

		return stList;
	}

//	------------------------- show sales product ------------------

	public List<Invoicedetail> showAllsalesProduct() {
		List<Invoicedetail> stList = new ArrayList<>();
		try {
			con = DriverManager.getConnection("jdbc:mysql://localhost/shoppingdb", "root", "nclc123456");
			pst = con.prepareStatement("SELECT * FROM invoicedetail");

			rs = pst.executeQuery();

			while (rs.next()) {
				stList.add(new Invoicedetail(rs.getInt(2), rs.getString(3), rs.getString(4), rs.getString(5),
						rs.getDouble(6), rs.getInt(7), rs.getDouble(8), rs.getString(9)));

			}

		} catch (SQLException e) {
			// TODO: handle exception
		}

		return stList;
	}

//	-------------------- Admin login ---------------------- 

	public Admin login(int id, String password) {
		Admin e = null;
		try {
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost/shoppingdb", "root", "nclc123456");
			PreparedStatement ps = con.prepareStatement("select * from admin where id=? AND password=?");

			ps.setInt(1, id);
			ps.setString(2, password);
			ResultSet rs = ps.executeQuery();

			while (rs.next()) {
				e = new Admin(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getString(5),
						rs.getString(6), rs.getString(7));
			}

		} catch (Exception ex) {
			// TODO: handle exception
		}

		return e;
	}
	
//	-------------------- search by invoice number ---------------------- 

	public Invoice searchandget(String invoicenumber) {
		Invoice e = null;
		try {
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost/shoppingdb", "root", "nclc123456");
			PreparedStatement ps = con.prepareStatement("select * from invoice where invoicenumber=?");
			
			ps.setString(1, invoicenumber);
			ResultSet rs = ps.executeQuery();

			while (rs.next()) {
				e =new Invoice(rs.getString(2), rs.getString(3), rs.getDate(4), rs.getDouble(5), rs.getDouble(6),
						rs.getString(7), rs.getString(8), rs.getString(9));
			}

		} catch (Exception ex) {
			// TODO: handle exception
		}

		return e;
	}

//	------------------------ varify -------------------
	public List<Transactionvarify> getalldata() {
		List<Transactionvarify> vlist = new ArrayList<>();
		try {
			con = DriverManager.getConnection("jdbc:mysql://localhost/shoppingdb", "root", "nclc123456");
			pst = con.prepareStatement("SELECT * FROM transactionvarify");
			rs = pst.executeQuery();
//			serialnumber, mobilenumber, transactionid, transactionamount
			while (rs.next()) {
				vlist.add(new Transactionvarify(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getDouble(4)));

			}

		} catch (SQLException e) {
			// TODO: handle exception
		}

		return vlist;
	}

	public List<Product> findAvailableProducts() {
		stList = new ArrayList<>();
		try {
			con = DriverManager.getConnection("jdbc:mysql://localhost/shoppingdb", "root", "nclc123456");
			pst = con.prepareStatement("SELECT * FROM product where productstock>0");
			rs = pst.executeQuery();
			while (rs.next()) {
				stList.add(new Product(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getDouble(5),
						rs.getInt(6), rs.getString(7)));

			}

		} catch (SQLException e) {
			// TODO: handle exception
		}

		return stList;
	}

	public Product findProductById(int id) {
		Product p = new Product();
		try {
			con = DriverManager.getConnection("jdbc:mysql://localhost/shoppingdb", "root", "nclc123456");
			pst = con.prepareStatement("SELECT * FROM product WHERE productid=?");
			pst.setInt(1, id);

			rs = pst.executeQuery();
			while (rs.next()) {
				p = new Product(rs.getInt(1), rs.getString(2), rs.getString(3), rs.getString(4), rs.getDouble(5),
						rs.getInt(6), rs.getString(7));

			}

		} catch (SQLException e) {
			// TODO: handle exception
		}

		return p;
	}

	public Product save(Product s) {

		try {
			con = DriverManager.getConnection("jdbc:mysql://localhost/shoppingdb", "root", "nclc123456");
			pst = con.prepareStatement("INSERT INTO product VALUES(?,?,?,?,?,?,?)");
			pst.setInt(1, s.getProductid());
			pst.setString(2, s.getProductname());
			pst.setString(3, s.getProductbrand());
			pst.setString(4, s.getProductcategory());
			pst.setDouble(5, s.getProductunitprice());
			pst.setInt(6, s.getProductstock());
			pst.setString(7, s.getPhotos());

			pst.executeUpdate();

		} catch (SQLException e) {
			// TODO: handle exception
		}

		return s;
	}

//	---------------------- add transaction ----------------------------

	public Transactionvarify addtransaction(Transactionvarify s) {

		try {
			con = DriverManager.getConnection("jdbc:mysql://localhost/shoppingdb", "root", "nclc123456");
			pst = con.prepareStatement("INSERT INTO transactionvarify VALUES(?,?,?,?)");

			pst.setInt(1, s.getSerialnumber());
			pst.setString(2, s.getMobilenumber());
			pst.setString(3, s.getTransactionid());
			pst.setDouble(4, s.getTransactionamount());

			pst.executeUpdate();

		} catch (SQLException e) {
			// TODO: handle exception
		}

		return s;
	}
//	-------------------------------------------------

	public Product update(Product s) {

		try {
			con = DriverManager.getConnection("jdbc:mysql://localhost/shoppingdb", "root", "nclc123456");
			pst = con.prepareStatement(
					"UPDATE product SET productname=?,productbrand=?,productcategory=?,productunitprice=?,productstock=? WHERE productid=?)");
			pst.setString(1, s.getProductname());
			pst.setString(2, s.getProductbrand());
			pst.setString(3, s.getProductcategory());
			pst.setDouble(4, s.getProductunitprice());
			pst.setInt(6, s.getProductstock());
			pst.setInt(5, s.getProductid());

			int i = pst.executeUpdate();

		} catch (SQLException e) {
			// TODO: handle exception
		}

		return s;
	}

	public void delete(int id) {

		try {
			con = DriverManager.getConnection("jdbc:mysql://localhost/shoppingdb", "root", "nclc123456");
			pst = con.prepareStatement("DELETE FROM product WHERE productid=?)");
			pst.setInt(1, id);
			int i = pst.executeUpdate();

		} catch (SQLException e) {
			// TODO: handle exception
		}

	}

	// sellproducts
	String invoice_number = "";

	public List<Invoicedetail> addProductToInvoicedetailtable(List<Invoicedetail> s) {
		List<Invoicedetail> invList = new ArrayList<>();
		invoice_number = "";
		try {

			Connection con = DriverManager.getConnection("jdbc:mysql://localhost/shoppingdb", "root", "nclc123456");

			// invoicedetailserial, productid, productname, productbrand, productcategory,
			// productprice, itemquantity, itemtotalprice, invoicenumber
			PreparedStatement pst = con.prepareStatement(
					"INSERT INTO invoicedetail ( productid, productname , productbrand, productcategory, productunitprice, itemquantity,itemtotalprice, invoicenumber) VALUES( ?,?,?,?,?,?,?,?)");

			invoice_number = String.valueOf("inv-" + new Date().getTime());
			System.out.println(invoice_number);

//			Date date = new Date();
//			java.sql.Date sql = new 	java.sql.Date(date.getTime());
			for (Invoicedetail c : s) {

				pst.setInt(1, c.getProductid());
				pst.setString(2, c.getProductname());
				pst.setString(3, c.getProductbrand());
				pst.setString(4, c.getProductcategory());
				pst.setDouble(5, c.getProductunitprice());
				pst.setInt(6, c.getItemquantity());
				pst.setDouble(7, c.getItemtotalprice());
				pst.setString(8, invoice_number);

				pst.executeUpdate();

			}

			System.out.println("inserting sellProduct ");

			PreparedStatement pstquery = con.prepareStatement("Select * from invoicedetail where invoicenumber=?");
			pstquery.setString(1, invoice_number);
			ResultSet rs = pstquery.executeQuery();
			Invoicedetail ids;
//			invoicedetailserial, productid, productname, productbrand, productcategory, productunitprice, itemquantity, itemtotalprice, invoicenumber
//			int invoicedetailserial;
//			int productid;
//			String productname;
//			String productbrand;
//			String productcategory;
//			double productunitprice;
//			int itemquantity;
//			double itemtotalprice;
//		    String  invoicenumber;
			while (rs.next()) {
				ids = new Invoicedetail(rs.getInt(2), rs.getString(3), rs.getString(4), rs.getString(5),
						rs.getDouble(6), rs.getInt(7), rs.getDouble(8), rs.getString(9));
				invList.add(ids);
			}
//			pst.executeUpdate();
			con.close();

		} catch (Exception e) {
			// TODO: handle exception
		}

		return invList;

	}

//update product table

	public Product updateProduct(int pro_id, int selqty) {
		int newstock = 0;
		try {
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost/shoppingdb", "root", "nclc123456");
			PreparedStatement pstcheckstock = con
					.prepareStatement("select productstock from product where productid=?");
			pstcheckstock.setInt(1, pro_id);
			ResultSet rscheckstock = pstcheckstock.executeQuery();
			while (rscheckstock.next()) {
				int oldstock = rscheckstock.getInt(1);
				newstock = oldstock - selqty;
			}

			PreparedStatement pst1 = con.prepareStatement("update product set productstock=? where productid=?");
			pst1.setInt(1, newstock);
			pst1.setInt(2, pro_id);

			pst1.executeUpdate();

		} catch (Exception e) {
			System.out.println(e);
		}

		return null;
	}

	public Invoice saveInvoiceData(Invoice s) {
//invoiceserial, invoicenumber,transactionnumber, invoicedate, totalquantity, totalprice, customername, customerphone, customerid
//		java.sql.Date d = new java.sql.Date(1000);
//		Invoice s=new Invoice("", (java.sql.Date) d, 100.0, 5000.5, "abc", "123456", "cus123");
		s.setInvoicenumber(invoice_number);
		try {
			con = DriverManager.getConnection("jdbc:mysql://localhost/shoppingdb", "root", "nclc123456");
			pst = con.prepareStatement(
					"INSERT INTO invoice(invoicenumber,transactionnumber, invoicedate, totalquantity, totalprice, customername, customerphone, customerid,orderstatus) VALUES(?,?,?,?,?,?,?,?,?)");
			pst.setString(1, s.getInvoicenumber());
			pst.setString(2, s.getTransactionnumber());
			pst.setDate(3, s.getInvoicedate());
			pst.setDouble(4, s.getTotalquantity());
			pst.setDouble(5, s.getTotalprice());
			pst.setString(6, s.getCustomername());
			pst.setString(7, s.getCustomerphone());
			pst.setString(8, s.getCustomerid());
			pst.setString(9, "processing");
			// System.out.println("dao: "+s);
			int i = pst.executeUpdate();

		} catch (SQLException e) {
			// TODO: handle exception
		}

		return s;
	}

	public Invoice findinvoicebynumber(String invoicenumber) {
		Invoice inv = new Invoice();
		try {
			con = DriverManager.getConnection("jdbc:mysql://localhost/shoppingdb", "root", "nclc123456");
			pst = con.prepareStatement("SELECT * FROM invoice WHERE invoicenumber=?");
			pst.setString(1, invoicenumber);

			rs = pst.executeQuery();
//			
//			String invoicenumber;
//			String transactionnumber;
//			Date invoicedate;
//			double totalquantity;
//			double totalprice;
//			String customername;
//			String customerphone;
//			String customerid;
			while (rs.next()) {
				inv = new Invoice(rs.getString(2), rs.getString(3), rs.getDate(4), rs.getDouble(5), rs.getDouble(6),
						rs.getString(7), rs.getString(8), rs.getString(9));

			}

		} catch (SQLException e) {
			// TODO: handle exception
		}

		return inv;
	}

}