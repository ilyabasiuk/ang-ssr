import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from "../models/product";
import { environment } from '../../../environments/environment';

const baseUrl = `${environment.apiUrl}/products`;

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(baseUrl);
  }

  public getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${baseUrl}`);
  } 
}
