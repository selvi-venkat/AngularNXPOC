import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';

@Component({
  selector: 'angular-nxpoc-login',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  formBuilder = inject(FormBuilder);
  route = inject(Router);
  loginBuilder = this.formBuilder.group({
    passwordFormControl: ['', Validators.required],
    emailFormControl: ['', [Validators.email, Validators.required]],
  });
  
  get loginFormLogin() {
    console.log(this.loginBuilder.controls);
    return this.loginBuilder.controls;
  }
  loginAccess() {
    console.log('loginAccess ');
    console.log(this.loginBuilder.valid);
    if(this.loginBuilder.valid){
      this .route.navigate(['/']);
    }
  }
}