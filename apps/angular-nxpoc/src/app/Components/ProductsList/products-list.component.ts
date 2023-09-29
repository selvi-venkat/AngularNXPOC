import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductInfoService } from '../../Services/product-info.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { AddCartService } from '../../Services/add-cart.service';

@Component({
  selector: 'angular-nxpoc-products-list',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, RouterModule],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  productsLisService = inject(ProductInfoService);
  cartAdd = inject(AddCartService);
  productsList: any;
  ngOnInit() {
    console.log('products');
    this.productsList = this.productsLisService.getProductsList();
  }
  cartAdditon(productValues: any) {
    console.log('cartAdditon');
    this.cartAdd.cartLogic(productValues);
    
  }
}
