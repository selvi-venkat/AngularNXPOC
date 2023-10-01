import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCartService } from '../../../Services/add-cart.service';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'angular-nxpoc-data-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent {
  cardProducts = inject(AddCartService);
  displayedColumns: string[] = ['title', 'price', 'catgegory', 'image'];
  dataSource = this.cardProducts.productCart;
}
