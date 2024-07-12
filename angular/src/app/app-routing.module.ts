import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowproductComponent } from './showproduct/showproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { ShowcartComponent } from './showcart/showcart.component';
import { PrintinvoiceComponent } from './printinvoice/printinvoice.component';
import { LoginComponent } from './login/login.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';
import { ErrorComponent } from './error/error.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminSidebarComponent } from './admin-sidebar/admin-sidebar.component';
import { TransactioninfoaddComponent } from './transactioninfoadd/transactioninfoadd.component';
import { ShowallsalesComponent } from './showallsales/showallsales.component';
import { SearchbyinvoiceComponent } from './searchbyinvoice/searchbyinvoice.component';

const routes: Routes = [
  {path:'', component:ShowproductComponent},
  {path:'showallstudents',component:ShowproductComponent},
  {path:'savestudent',component:AddproductComponent},
  {path:'details/:id',component:ProductdetailsComponent},
  {path:'updatestudent',component:UpdateproductComponent},
  {path:'showcart',component:ShowcartComponent},
  {path:'printinvoice',component:PrintinvoiceComponent},
  {path:'login',component:LoginComponent},
  {path:'adminpanel',component:AdminpanelComponent},
  {path:'error',component:ErrorComponent},
  {path:'adminheader',component:AdminHeaderComponent},
  {path:'adminsidebar',component:AdminSidebarComponent},
  {path:'transactioninfoadd',component:TransactioninfoaddComponent},
  {path:'showallsales',component:ShowallsalesComponent},
  {path:'searchbyinvoice',component:SearchbyinvoiceComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
