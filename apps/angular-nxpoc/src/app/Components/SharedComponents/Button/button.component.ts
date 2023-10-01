/* eslint-disable @angular-eslint/no-output-on-prefix */
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { staticKeywords } from '../../../Constants/static';
import { IKeyText } from '../../../Models/staticKey.modal';

@Component({
  selector: 'angular-nxpoc-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Input({
    required: true,
    transform: (value: keyof IKeyText) => staticKeywords[value],
  })
  text!: string;
  @Input({ required: true }) type!: string;
  @Output() onClick = new EventEmitter<string>();
  eventEmitter() {
    this.onClick.emit();
  }
}
