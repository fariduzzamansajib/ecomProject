import { Invoice } from "./invoice";
import { Product } from "./product";

export class Multiobjectpost {
    products: any=[];
    invoice: any;
    constructor(products: any, invoice: any) {
        this.products = products;
        this.invoice = invoice;
    }
}
