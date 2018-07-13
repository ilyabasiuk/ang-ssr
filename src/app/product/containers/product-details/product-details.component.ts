import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from "../../models/product";

@Component({
  selector: 'app-product-details',
  template: `
    {{product | json}}
  `,
  styles: []
})
export class ProductDetailsComponent implements OnInit {
  public product: Product = new Product();
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.product.id = this.route.snapshot.paramMap.get("id");
  }

}
