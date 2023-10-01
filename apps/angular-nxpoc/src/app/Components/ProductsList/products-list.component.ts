import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoService } from '../../Services/product-info.service';
import { AddCartService } from '../../Services/add-cart.service';
import { CardComponent } from '../SharedComponents/Card/card.component';
import { IProduct } from '../../Models/product.modal';
import { Observable } from 'rxjs';

@Component({
  selector: 'angular-nxpoc-products-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  productsLisService = inject(ProductInfoService);
  cartAdd = inject(AddCartService);
  productsList!: Observable<IProduct[]>;

  ngOnInit() {
    console.log('products');
    this.productsList= this.productsLisService.getProductsList();
  }
  cartAdditon(productValues: IProduct) {
    console.log('cartAdditon');
    this.cartAdd.cartLogic(productValues);
  }
}
