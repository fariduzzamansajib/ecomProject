export class Invoicedetail {

    // invoicedetailserial, productid, productname, productbrand, productcategory, productunitprice, itemquantity, itemtotalprice, invoicenumber

    productid: any;
    productname: any;
    productbrand: any;
    productcategory: any;
    productunitprice: any;
    itemquantity: any;
    itemtotalprice: any;
    invoicenumber: any;

    constructor(productid: any, productname: any, productbrand: any, productcategory: any, productunitprice: any, itemquantity: any, itemtotalprice: any, invoicenumber: any) {
        this.productid = productid;
        this.productname = productname;
        this.productbrand = productbrand;
        this.productcategory = productcategory;
        this.productunitprice = productunitprice;
        this.itemquantity = itemquantity;
        this.itemtotalprice = itemtotalprice;
        this.invoicenumber = invoicenumber;
    }
}
