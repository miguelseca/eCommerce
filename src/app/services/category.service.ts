import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Category } from '../models/category';
import { DB_URL_CATEGORIES } from 'src/config/database_config';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  apiURLCategories = DB_URL_CATEGORIES;

  constructor(private http: HttpClient) {}

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.apiURLCategories);
  }

  getCategory(categoryId: string): Observable<Category> {
    return this.http.get<Category>(`${this.apiURLCategories}/${categoryId}`);
  }
}
