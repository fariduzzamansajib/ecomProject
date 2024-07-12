import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-printinvoice',
  templateUrl: './printinvoice.component.html',
  styleUrls: ['./printinvoice.component.css']
})
export class PrintinvoiceComponent implements OnInit {


  transactionnumber:any;
  invoicedate: any;
  totalquantity: any;
  totalprice: any;
  customername: any;
  customerphone: any;
  customerid: any;



  invoicedetails:any[]=[];
  invoice:any;
  invoicenumber:any;
  constructor(private router:Router,private myservice:ProductService) {
    this.invoicedetails=this.router.getCurrentNavigation()?.extras.state?.['response'];
    this.invoicenumber=this.invoicedetails[0].invoicenumber;
    //this.invoicedetails=this.router.getCurrentNavigation().extras.state.example;
   this.myservice.findinvoicebynumber(this.invoicenumber).subscribe((data)=>{
    this.invoice=data;
    });
  }

printinvoice(){
  window.print();
}

  ngOnInit(): void {
  }

}
