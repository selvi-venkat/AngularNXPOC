import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from '../ProductsList/products-list.component';

@Component({
  selector: 'angular-nxpoc-app-main-content',
  standalone: true,
  imports: [CommonModule, ProductsListComponent],
  templateUrl: './app-main-content.component.html',
  styleUrls: ['./app-main-content.component.css'],
})
export class AppMainContentComponent {}
