import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IProduct } from '../Models/product.modal';

@Injectable({
  providedIn: 'root',
})
export class AddCartService {
  cartCount = 0;
  subjectCart$ = new BehaviorSubject(0);
  productCart: IProduct[] = [];
  cartLogic(productInfo: IProduct) {
    this.cartCount++;
    this.subjectCart$.next(this.cartCount);
    const productExist = this.productCart.find(
      (product) => product.id === productInfo.id
    );
    if (!productExist) {
      this.productCart.push(productInfo);
    }
    console.log(this.productCart);
  }
}
