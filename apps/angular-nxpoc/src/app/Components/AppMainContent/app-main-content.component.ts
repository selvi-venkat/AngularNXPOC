import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from '../ProductsList/products-list.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'angular-nxpoc-app-main-content',
  standalone: true,
  imports: [CommonModule, ProductsListComponent, RouterModule],
  templateUrl: './app-main-content.component.html',
  styleUrls: ['./app-main-content.component.css'],
})
export class AppMainContentComponent {}
