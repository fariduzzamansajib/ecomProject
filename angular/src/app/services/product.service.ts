import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Invoice } from '../models/invoice';
import { Multiobjectpost } from '../models/multiobjectpost';
import { Transactionvarify } from '../models/transactionvarify';
import { Admin } from '../models/admin';
import { Invoicedetail } from '../models/invoicedetail';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {

  }
  url = "http://localhost:8080/";

   // ------------------- admin login --------------------------- 

   login(id: any, password: any): Observable<Admin> {
    this.url = "http://localhost:8080/adminlogin/";
    return this.http.get<Admin>(this.url + id + "/" + password);
  }

  // ------------------- Search by invoice --------------------------- 

  searchandget(p:any): Observable<Invoice> {
    this.url = "http://localhost:8080/searchandget/";
    return this.http.get<Invoice>(this.url +p);
  }

  // -------------------------------------- showallsalesproduct

  findStudentAll(): Observable<Product> {
    this.url = "http://localhost:8080/all";
    return this.http.get<Product>(this.url);
  }

   // -------------------------------------- 

   showallsales(): Observable<Invoicedetail> {
    this.url = "http://localhost:8080/showallsalesproduct";
    return this.http.get<Invoicedetail>(this.url);
  }

  // --------------- verify ----------------

  getvarify(): Observable<Transactionvarify> {
    this.url = "http://localhost:8080/getverify";
    return this.http.get<Transactionvarify>(this.url);
  }

  saveStudent(s: Product): Observable<Product> {
    this.url = "http://localhost:8080/save";
    return this.http.post<Product>(this.url, s);
  }

  // ------------------------- add transaction --------------------------
  addtransaction(s: Transactionvarify): Observable<Transactionvarify> {
    this.url = "http://localhost:8080/addtransaction";
    return this.http.post<Transactionvarify>(this.url, s);
  }

  // --------------------

  findStudentById(id: any): Observable<Product> {
    this.url = "http://localhost:8080/student/" + id;
    return this.http.get<Product>(this.url);
  }

  getProductsincart() {
    return this.productsincart;
  }
  // ----------------- add to cart -------------------------------

  productsincart: Product[] = [];

  addProductsincart(s: Product) {
    let item: Product = this.productsincart.find(item => item.productid == s.productid) as Product;
    if (item) {
      item.qty++;
      item.itemquantity = item.qty;
      item.itemtotalprice = item.productunitprice * item.qty;
    } else {
      (s as Product).qty = 1;
      s.itemquantity = s.qty;
      s.itemtotalprice = s.productunitprice * s.qty;
      this.productsincart.push(s)
    }
    this.cartallproducttotalPricedo();
    // alert("Added");
    return this.productsincart;
  }

  cartallproducttotalPrice: any = 0;

  cartallproducttotalPricedo() {
    this.cartallproducttotalPrice = 0;
    for (let p of this.productsincart) {
      this.cartallproducttotalPrice += p.itemtotalprice;

    }

    return this.cartallproducttotalPrice;

  }

  cartallproducttotalQuantity: any = 0;
  cartallproducttotalQuantitydo() {
    this.cartallproducttotalQuantity = 0;
    for (let p of this.productsincart) {
      this.cartallproducttotalQuantity += p.itemquantity;
    }

    return this.cartallproducttotalQuantity;

  }

  increaseaddProductsincart(s: Product) {
    let item: Product = this.productsincart.find(item => item.productid == s.productid) as Product;
    if (item.qty < item.productstock) {
      item.qty++;
      item.itemquantity = item.qty;
      item.itemtotalprice = item.productunitprice * item.qty;
    }

    this.cartallproducttotalPricedo();

    return this.productsincart;
  }



  decreaseaddProductsincart(s: Product) {
    let item: Product = this.productsincart.find(item => item.productid == s.productid) as Product;
    if (item.qty > 1) {
      item.qty--;
      item.itemquantity = item.qty;
      item.itemtotalprice = item.productunitprice * item.qty;

    } else {
      this.productsincart = this.removeProductsincart(s);
    }
    // else {
    //   (s as Student).qty = 1;
    //   this.produtsincart.push(s)
    // }
    this.cartallproducttotalPricedo();
    return this.productsincart;
  }


  removeProductsincart(s: Product) {
    this.productsincart = this.productsincart.filter((item) => {
      return item.productid !== s.productid;
    })
    this.cartallproducttotalPricedo();

    return this.productsincart;

    // alert(this.productsincart.length);
    //return this.produtsincart;
  }






  multipleobj?: Multiobjectpost;

  saveProductsToInvoicedetail(s: Product[], s2: Invoice): Observable<any> {
    this.multipleobj = new Multiobjectpost(s, s2);
    //this.multipleobj.products=s;
    //this.multipleobj.push(s2);
    //s2.invoicedate+"/"+s2.totalquantity+"/"+s2.totalprice+"/"+s2.customername+"/"+s2.customerphone+"/"+s2.customerid
    this.url = "http://localhost:8080/addproducttoinvoicedetail/" + s2.transactionnumber + "/" + s2.invoicedate + "/" + s2.totalquantity + "/" + s2.totalprice + "/" + s2.customername + "/" + s2.customerphone + "/" + s2.customerid;
    //alert("service "+s2.customername);
    //return this.http.post<any>(this.url, s);
    return this.http.post<any>(this.url, s);
    //return this.http.post<any>(this.url, s);
  }


  findinvoicebynumber(invoicenumber: any): Observable<any> {
    this.url = "http://localhost:8080/findinvoicebynumber/" + invoicenumber;
    return this.http.get<any>(this.url);
  }


}