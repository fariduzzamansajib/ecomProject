import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Transactionvarify } from '../models/transactionvarify';

@Component({
  selector: 'app-transactioninfoadd',
  templateUrl: './transactioninfoadd.component.html',
  styleUrls: ['./transactioninfoadd.component.css']
})
export class TransactioninfoaddComponent implements OnInit {

  serialnumber:any;
  mobilenumber: any;
  transactionid: any;
  transactionamount: any;

  constructor(private myservice: ProductService) { }

  ngOnInit(): void {
  }

  data: any;
  addtransaction() {
    this.data = new Transactionvarify(this.serialnumber,this.mobilenumber, this.transactionid, this.transactionamount);
    this.myservice.addtransaction(this.data).subscribe(() => {
      alert("successfully added");
    });
  }

}
