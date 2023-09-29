import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductInfoService {
  constructor(private http: HttpClient) {}
  url = 'https://fakestoreapi.com/products';
  getProductsList() {
    return this.http.get(this.url);
  }
  getProductDescriptionInfo(id: string) {
    return this.http.get(`${this.url}/${id}`);
  }
}
