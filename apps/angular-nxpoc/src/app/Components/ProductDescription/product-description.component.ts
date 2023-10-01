import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductInfoService } from '../../Services/product-info.service';
import { MatChipsModule } from '@angular/material/chips';
import { AddCartService } from '../../Services/add-cart.service';
import { ButtonComponent } from '../SharedComponents/Button/button.component';
import { IProduct } from '../../Models/product.modal';

@Component({
  selector: 'angular-nxpoc-product-description',
  standalone: true,
  imports: [CommonModule, RouterModule, MatChipsModule, ButtonComponent],
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css'],
})
export class ProductDescriptionComponent implements OnInit {
  @Input() productid!: string;
  descriptionInfo = inject(ProductInfoService);
  cartAdd = inject(AddCartService);
  product!: IProduct;

  cartAdditon(product: IProduct): void {
    this.cartAdd.cartLogic(product);
  }
  ngOnInit() {
    this.descriptionInfo
      .getProductDescriptionInfo(this.productid)
      .subscribe((val) => {
        this.product = val;
      });
    console.log(this.product);
  }
}
