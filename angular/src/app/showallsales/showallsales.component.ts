import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-showallsales',
  templateUrl: './showallsales.component.html',
  styleUrls: ['./showallsales.component.css']
})
export class ShowallsalesComponent implements OnInit {
  getdata: any;
  constructor(private myservice: ProductService) {
    this.myservice.showallsales().subscribe((x) => {
      this.getdata = x;
    });
  }

  ngOnInit(): void {
  }

}
