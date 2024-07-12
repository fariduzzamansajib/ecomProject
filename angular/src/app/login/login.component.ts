import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private myservice: ProductService, private router: Router) { }

  id: any;
  password: any;

  loginAdmin: any;

  ngOnInit(): void {
  }

  login() {
    this.myservice.login(this.id, this.password).subscribe((x) => {
      this.loginAdmin = x;

      if ((this.loginAdmin != null)) {
        alert("Login Successful");
        this.router.navigateByUrl("adminpanel");
      } else {
        this.router.navigateByUrl("error");
      }
    });

  }

}