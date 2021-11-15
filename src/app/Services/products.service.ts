import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Products } from '../types';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<[]> {
    return this.http.get<[]>('http://localhost:3000/products');
  }
  getProduct(id: string|null): Observable<Products> {
    return this.http.get<Products>('http://localhost:3000/product/'+id);
  }
}
