import { animateChild } from "@angular/animations";

export class Product {

    //productid, productname, productbrand, producctategory, productunitprice, productstock
    // invoicedetailserial, productid, productname, productbrand, productcategory, productunitprice, itemquantity, itemtotalprice, invoicenumber
    productid: any;
    productname: any;
    productbrand: any;
    productcategory: any;
    productunitprice: any;
    productstock: any;
    photos: any;

    //additionals
    qty: any;
    itemquantity: any;
    itemtotalprice: any;
    invoicenumber: any;

    constructor(productid: any, productname: any, productbrand: any, productcategory: any, productunitprice: any, productstock: any, photos: any) {
        this.productid = productid;
        this.productname = productname;
        this.productbrand = productbrand;
        this.productcategory = productcategory;
        this.productunitprice = productunitprice
        this.productstock = productstock
        this.photos = photos;

    }
}
