import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {

  productid: any;
  productname: any;
  productbrand: any;
  productcategory: any;
  productunitprice:any;
  productstock:any;
  photos:any;

  // product:any={"productid": "","productname": "","productbrand": "","productcategory": "","productunitprice": "","productstock": "", "photos":""};
  constructor(private router:Router, private activatedroute:ActivatedRoute,private myservice:ProductService){
    this.id=this.activatedroute.snapshot.paramMap.get("id");
    //alert(this.id);
    this.myservice.findStudentById(this.id).subscribe((data)=>{
      this.product=data;
    });
    //this.productsincart = this.myservice.getProductsincart();
  }
  product:any;
 id:any;

  ngOnInit(): void {
  }

}
