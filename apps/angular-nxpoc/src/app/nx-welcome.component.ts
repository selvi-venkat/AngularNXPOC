import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/Header/header.component';
import { ProductsListComponent } from './Components/ProductsList/products-list.component';

@Component({
  selector: 'angular-nxpoc-nx-welcome',
  standalone: true,
  template: ``,
  styles: [],
  encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, HeaderComponent, ProductsListComponent],
})
export class NxWelcomeComponent {}
