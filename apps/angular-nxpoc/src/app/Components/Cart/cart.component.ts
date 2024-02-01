import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCartService } from '../../Services/add-cart.service';
import { IProduct } from '../../Models/product.modal';
import { CardComponent } from "../SharedComponents/Card/card.component";

@Component({
    selector: 'angular-nxpoc-cart',
    standalone: true,
    templateUrl: './cart.component.html',
    styleUrls: ['./cart.component.css'],
    imports: [CommonModule, CardComponent]
})
export class CartComponent implements OnInit{
  cartService = inject(AddCartService);
  cartItems: IProduct[] = this.cartService.productCart;
  cartDisplay(){
    console.log(this.cartService);
    console.log(this.cartItems);
  }
  cartId(index: number,items: IProduct){
    return items.id;
  }
  ngOnInit(){
    this.cartDisplay();
  }
}
