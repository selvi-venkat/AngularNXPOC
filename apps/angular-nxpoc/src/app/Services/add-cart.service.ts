import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AddCartService {
  cartCount = 0;
  subjectCart$ = new BehaviorSubject(0);
  productCart: Array<string> = [];
  cartLogic(productInfo: any) {
    this.cartCount = this.cartCount + 1;
    this.subjectCart$.next(this.cartCount);
    this.productCart.push(productInfo);
  }
}
