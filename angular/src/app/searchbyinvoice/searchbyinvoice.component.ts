import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-searchbyinvoice',
  templateUrl: './searchbyinvoice.component.html',
  styleUrls: ['./searchbyinvoice.component.css']
})
export class SearchbyinvoiceComponent implements OnInit {
  
  invoicenumber:any;
  constructor(private myservice:ProductService) { }

  ngOnInit(): void {
  }

  getData:any;
  searchandget() {
    this.myservice.searchandget(this.invoicenumber).subscribe((x) => {
      this.getData = x;
      // this.router.navigateByUrl("loanstatement", { state: { response: this.getData } });
    });
  }

}