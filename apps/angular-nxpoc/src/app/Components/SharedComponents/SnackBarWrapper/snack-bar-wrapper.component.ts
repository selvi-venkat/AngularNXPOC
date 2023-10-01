import { Component, Inject, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSnackBarRef } from '@angular/material/snack-bar';
import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';


@Component({
  selector: 'angular-nxpoc-snack-bar-wrapper',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './snack-bar-wrapper.component.html',
  styleUrls: ['./snack-bar-wrapper.component.css'],
})
export class SnackBarWrapperComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: string) { }
  snackBarRef = inject(MatSnackBarRef);
}
