import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule } from '@angular/material/input';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../Services/AuthService/auth-service.service';

@Component({
  selector: 'angular-nxpoc-sign-up',
  standalone: true,
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent {
  authCheck = inject(AuthServiceService);
  formBuilder = inject(FormBuilder);
  route = inject(Router);
  signUpBuilder = this.formBuilder.group({
    emailFormControl: ['', [Validators.email, Validators.required]],
    passwordFormControl: ['', [Validators.required]],
    //  confirmpasswordFormControl: ['', [Validators.required]],
  });

  get signUpForm() {
    return this.signUpBuilder.controls;
  }
  // passwordConfirmValidator(control: AbstractControl) {
  //   const passwordValue = control.root.get('passwordFormControl')?.value;
  //   const confirmpasswordValue = control.root.get(
  //     'confirmpasswordFormControl'
  //   )?.value;
  //   if (passwordValue !== confirmpasswordValue) {
  //     console.log('fail');
  //     return { confirmPasswordMatch: true };
  //   }
  //   return null;
  // }

  signUpAccess() {
    if (this.signUpBuilder.valid) {
      this.authCheck.SignUpAccess(
        this.signUpBuilder.controls.emailFormControl.value,
        this.signUpBuilder.controls.passwordFormControl.value
      );
      // this.route.navigate(['/']);
    }
  }
}
