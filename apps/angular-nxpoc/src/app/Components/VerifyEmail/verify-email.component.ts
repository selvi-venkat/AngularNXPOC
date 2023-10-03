import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthServiceService } from '../../Services/AuthService/auth-service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'angular-nxpoc-verify-email',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css'],
})
export class VerifyEmailComponent {
  authService = inject(AuthServiceService);
}
