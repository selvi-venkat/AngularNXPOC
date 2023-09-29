import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductInfoService } from '../../Services/product-info.service';
import { MatChipsModule } from '@angular/material/chips';
import { MatButtonModule } from '@angular/material/button';
import { AddCartService } from '../../Services/add-cart.service';

@Component({
  selector: 'angular-nxpoc-product-description',
  standalone: true,
  imports: [CommonModule, RouterModule, MatChipsModule, MatButtonModule],
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css'],
})
export class ProductDescriptionComponent implements OnInit {
  @Input() productid!: string;
  descriptionInfo = inject(ProductInfoService);
  cartAdd = inject(AddCartService);
  product: any;

  cartAdditon(product: any) {
    console.log('cartAdditon');
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
