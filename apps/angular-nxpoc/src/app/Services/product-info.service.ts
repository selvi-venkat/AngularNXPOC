import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IProduct } from '../Models/product.modal';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductInfoService {
  constructor(private http: HttpClient) {}
  url = 'https://fakestoreapi.com/products';
  getProductsList(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url);
  }
  getProductDescriptionInfo(id: string): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.url}/${id}`);
  }
}
