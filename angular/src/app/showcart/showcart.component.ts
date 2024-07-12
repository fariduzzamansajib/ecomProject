import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Invoice } from '../models/invoice';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-showcart',
  templateUrl: './showcart.component.html',
  styleUrls: ['./showcart.component.css']
})
export class ShowcartComponent implements OnInit {


  products: any;
  //student: any;

  //productid, productname, productbrand, producctategory, productunitprice, productstock
  //invoicedetailserial, productid, productname, productbrand, productcategory, productprice, itemquantity, itemtotalprice, invoicenumber
  productid: any;
  productname: any;
  productbrand: any;
  productcategory: any;
  productunitprice: any;
  productstock: any;


  //additionals
  qty: any;
  itemquantity: any;
  itemtotalprice: any;


  //invoice details
  // invoiceserial, invoicenumber, invoicedate, totalquantity, totalprice, customername, customerphone, customerid
  invoicenumber: any;
  transactionnumber: any;
  invoicedate: any;
  totalquantity: any;
  totalprice: any;
  customername: any;
  customerphone: any;
  customerid: any;





  constructor(private myservice: ProductService,private router:Router) {
    this.productsincart = this.myservice.getProductsincart();
    //this.productsincart = this.myservice.getProductsincart();
    this.cartallproducttotalPrice = this.myservice.cartallproducttotalPricedo();
    this.cartallproducttotalQuantity = this.myservice.cartallproducttotalQuantitydo();
    this.totalprice=this.cartallproducttotalPrice;
    this.totalquantity=this.cartallproducttotalQuantity;
  }
  getStudentAll() {
    this.myservice.findStudentAll().subscribe((data) => {
      this.products = data;
    });


  }

  addtocart(s: Product) {
    this.myservice.addProductsincart(s);
    this.cartallproducttotalPrice = this.myservice.cartallproducttotalPricedo();
    this.cartallproducttotalQuantity = this.myservice.cartallproducttotalQuantitydo();
    //alert("added");
  }
  increasetocart(s: Product) {
    this.myservice.increaseaddProductsincart(s);
    this.cartallproducttotalPrice = this.myservice.cartallproducttotalPricedo();
    this.cartallproducttotalQuantity = this.myservice.cartallproducttotalQuantitydo();
    this.totalprice=this.cartallproducttotalPrice;
    this.totalquantity=this.cartallproducttotalQuantity;
    //alert("increased");
  }
  decreasetocart(s: Product) {
    this.productsincart = this.myservice.decreaseaddProductsincart(s);
    this.cartallproducttotalPrice = this.myservice.cartallproducttotalPricedo();
    this.cartallproducttotalQuantity = this.myservice.cartallproducttotalQuantitydo();
    this.totalprice=this.cartallproducttotalPrice;
    this.totalquantity=this.cartallproducttotalQuantity;
    //alert("decreased");

  }
  removefromcart(s: Product) {
    this.productsincart = this.myservice.removeProductsincart(s);
    this.cartallproducttotalPrice = this.myservice.cartallproducttotalPricedo();
    this.cartallproducttotalQuantity = this.myservice.cartallproducttotalQuantitydo();
    this.totalprice=this.cartallproducttotalPrice;
    this.totalquantity=this.cartallproducttotalQuantity;
    //this.showcart();
    //alert("removed");
  }

  productsincart: any = [];
  cartallproducttotalPrice: any = 0;
  cartallproducttotalQuantity: any = 0;

  showcart() {
    this.productsincart = this.myservice.getProductsincart();
    this.cartallproducttotalPrice = this.myservice.cartallproducttotalPricedo();
    this.cartallproducttotalQuantity = this.myservice.cartallproducttotalQuantitydo();

  }

  //invoicedetails:any=this.productsincart;
  invoice: any;
  invoicedetails:any=[];
  buycart() {
    this.invoice = new Invoice(this.invoicenumber, this.transactionnumber, this.invoicedate, this.totalquantity, this.totalprice, this.customername, this.customerphone, this.customerid);
    this.myservice.saveProductsToInvoicedetail(this.productsincart, this.invoice).subscribe((data) => {
      this.invoicedetails=data;
      alert(this.invoicedetails[0].invoicenumber);
     this.router.navigate(["/printinvoice"],{ state: { response: this.invoicedetails } });
    });

  }

  showpurchasesection: any = false;
  purchasedetails() {
    this.showpurchasesection = true;
  }

  paymentvarified: any = false;
  getData:any;
  varifypayment() {
    this.myservice.getvarify().subscribe((x)=>{
      this.getData=x;
    })
    for(let i of this.getData){
      if((this.transactionnumber==i.transactionid)&&(this.customerphone==i.mobilenumber)){
        this.paymentvarified = true;
        }          
    }
   
  }


  ngOnInit(): void {
    this.getStudentAll();
  }

}
