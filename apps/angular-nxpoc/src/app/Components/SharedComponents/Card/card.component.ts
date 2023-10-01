import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { ButtonComponent } from '../Button/button.component';
import { RouterModule } from '@angular/router';
import { IProduct } from '../../../Models/product.modal';

@Component({
  selector: 'angular-nxpoc-card',
  standalone: true,
  imports: [CommonModule, ButtonComponent, MatCardModule, RouterModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input({ required: true }) products!: IProduct;
  @Output() clickEvent = new EventEmitter();

  emitEvent($event: IProduct) {
    this.clickEvent.emit($event);
  }
}
