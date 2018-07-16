import { Injectable } from "@angular/core";
import { Resolve } from '@angular/router';

import { Product } from "../models/product";
import { ProductService } from "../services/product.service";

@Injectable({
    providedIn: 'root',
})
export class ProductResolver implements Resolve<Product[]> {
    constructor(private service: ProductService) {}

    resolve() {
        return this.service.getProducts();
    }
}