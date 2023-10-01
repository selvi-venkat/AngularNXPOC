import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddCartService } from '../../Services/add-cart.service';
import { DataTableComponent } from '../SharedComponents/DataTable/data-table.component';
import { staticKeywords} from '../../Constants/static';

@Component({
  selector: 'angular-nxpoc-cart',
  standalone: true,
  imports: [CommonModule, DataTableComponent],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cardProducts = inject(AddCartService);
  displayedColumns: string[] = ['title', 'price', 'category', 'image'];
  dataSource = this.cardProducts.productCart;
  noCartMsg = staticKeywords['noCartText'];
}

