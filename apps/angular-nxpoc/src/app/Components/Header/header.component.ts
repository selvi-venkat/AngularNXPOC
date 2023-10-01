import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { AddCartService } from '../../Services/add-cart.service';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'angular-nxpoc-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatBadgeModule,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  cartAdd = inject(AddCartService);
  cartCount!: number;
  ngOnInit() {
    this.cartAdd.subjectCart$.subscribe((value: number) => {
      console.log(value);
      this.cartCount = value;
    });
  }
}
