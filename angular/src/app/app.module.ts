import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { FormsModule } from '@angular/forms';
import { ProductService } from './services/product.service';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ShowcartComponent } from './showcart/showcart.component';
import { PrintinvoiceComponent } from './printinvoice/printinvoice.component';
import { LoginComponent } from './login/login.component';
import { ErrorComponent } from './error/error.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { TransactioninfoaddComponent } from './transactioninfoadd/transactioninfoadd.component';
import { ShowallsalesComponent } from './showallsales/showallsales.component';
import { SearchbyinvoiceComponent } from './searchbyinvoice/searchbyinvoice.component';

@NgModule({
  declarations: [
    AppComponent,
    AddproductComponent,
    ShowproductComponent,
    UpdateproductComponent,
    ProductdetailsComponent,
    ShowcartComponent,
    PrintinvoiceComponent,
    LoginComponent,
    ErrorComponent,
    AdminpanelComponent,
    AdminHeaderComponent,
    AdminSidebarComponent,
    TransactioninfoaddComponent,
    ShowallsalesComponent,
    SearchbyinvoiceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
