import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { DB_URL_PRODUCTS } from 'src/config/database_config';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  apiURLProducts = DB_URL_PRODUCTS;

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiURLProducts);
  }

  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(`${this.apiURLProducts}/${productId}`);
  }

}
