import { Injectable, inject } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';
import { SnackBarWrapperComponent } from '../../Components/SharedComponents/SnackBarWrapper/snack-bar-wrapper.component';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  _snackBar = inject(MatSnackBar);
  config: MatSnackBarConfig = {
    duration: 2000,
    horizontalPosition: 'center',
    verticalPosition: 'top',
  };
  success(dataSuccess: string) {
    this.config['panelClass'] = ['success-snackbar'];
    this.config['data'] = dataSuccess;
    this._snackBar.openFromComponent(SnackBarWrapperComponent, this.config);
  }

  error(dataError: string) {
    this.config['panelClass'] = ['error-snackbar'];
    this.config['data'] = dataError;
    this._snackBar.openFromComponent(SnackBarWrapperComponent, this.config);
  }
}
