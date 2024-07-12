import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-showproduct',
  templateUrl: './showproduct.component.html',
  styleUrls: ['./showproduct.component.css']
})
export class ShowproductComponent implements OnInit {
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
  invoicenumber: any;

  constructor(private myservice: ProductService, private router: Router) {
    this.productsincart = this.myservice.getProductsincart();
  }

  products: any;
  getStudentAll() {
    this.myservice.findStudentAll().subscribe((data) => {
      this.products = data;
    });
  }

  ngOnInit() {
    this.getStudentAll();
  }

  productsincart: any = [];
  cartallproducttotalPrice: any = 0;
  cartallproducttotalQuantity: any = 0;

  addtocart(s: Product) {
    this.myservice.addProductsincart(s);
    this.cartallproducttotalPrice = this.myservice.cartallproducttotalPricedo();
    this.cartallproducttotalQuantity = this.myservice.cartallproducttotalQuantitydo();
    //alert("added");
  }

  increasetocart(s: Product) {
    this.myservice.increaseaddProductsincart(s);
    this.cartallproducttotalPrice = this.myservice.cartallproducttotalPricedo();
    //alert("increased");
  }
  decreasetocart(s: Product) {
    this.productsincart = this.myservice.decreaseaddProductsincart(s);
    this.cartallproducttotalPrice = this.myservice.cartallproducttotalPricedo();

    //alert("decreased");

  }
  removefromcart(s: Product) {
    this.productsincart = this.myservice.removeProductsincart(s);
    this.cartallproducttotalPrice = this.myservice.cartallproducttotalPricedo();

    //this.showcart();
    //alert("removed");
  }




  // showcart() {
  //   this.productsincart = this.myservice.getProductsincart();
  //   this.cartallproducttotalPrice = this.myservice.cartallproducttotalPricedo();

  // }

  showcart2() {
    //this.productsincart = this.myservice.getProductsincart();
    //this.cartallproducttotalPrice = this.myservice.cartallproducttotalPricedo();
    this.router.navigateByUrl("/showcart");

  }

  //invoicedetails:any=this.productsincart;
  invoice: any = {};
  buycart() {
    this.myservice.saveProductsToInvoicedetail(this.productsincart, this.invoice).subscribe((data) => {

    });

  }

}
