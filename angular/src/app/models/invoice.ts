export class Invoice {
    invoicenumber: any;
    transactionnumber:any;
    invoicedate: any;
    totalquantity: any;
    totalprice: any;
    customername: any;
    customerphone: any;
    customerid: any;
    constructor(invoicenumber: any,transactionnumber:any,invoicedate: any,totalquantity: any,totalprice: any,customername: any,customerphone: any,customerid: any){
        this.invoicenumber=invoicenumber;
        this.transactionnumber=transactionnumber;
        this.invoicedate=invoicedate;
        this.totalquantity=totalquantity;
        this.totalprice=totalprice;
        this.customername=customername;
        this.customerphone=customerphone;
        this.customerid=customerid; 
    }

}