import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Product } from "../../models/product";
import { ProductService } from '../../services/product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-details',
  template: `
    <app-product [product]="product" [details]="true"></app-product>
  `,
  styles: []
})
export class ProductDetailsComponent implements OnInit {
  public product: Product = new Product();
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.data
      .pipe(
        map(data => data['product'])
      ).subscribe(res => this.product = res); 
  }
}
