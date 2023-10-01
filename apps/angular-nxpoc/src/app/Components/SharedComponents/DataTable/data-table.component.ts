import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCartService } from '../../../Services/add-cart.service';
import { MatTableModule } from '@angular/material/table';
import { IProduct } from '../../../Models/product.modal';

@Component({
  selector: 'angular-nxpoc-data-table',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css'],
})
export class DataTableComponent {
  cardProducts = inject(AddCartService);
  @Input() displayedColumns!: string[];
  @Input() dataSource!: IProduct[];
}
