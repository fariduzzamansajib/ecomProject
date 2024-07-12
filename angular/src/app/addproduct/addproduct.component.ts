import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-addproduct',
  templateUrl: './addproduct.component.html',
  styleUrls: ['./addproduct.component.css']
})
export class AddproductComponent implements OnInit {

  //productid, productname, productbrand, producctategory, productunitprice, productstock
  constructor(private myservice: ProductService) { }
  student: any;
  productid: any;
  productname: any;
  productbrand: any;
  producctategory: any;
  productunitprice: any;
  productstock: any;
  photos: any;

  getStudentsave() {
    this.student = new Product(this.productid, this.productname, this.productbrand, this.producctategory, this.productunitprice, this.productstock, this.photos);
    this.myservice.saveStudent(this.student).subscribe(() => {
      alert("Product added");
    });


  }

  ngOnInit(): void {
  }

}
