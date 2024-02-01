import { Component, DoCheck, OnChanges, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { AddCartService } from '../../Services/add-cart.service';
import { MatMenuModule } from '@angular/material/menu';
import { AuthServiceService } from '../../Services/AuthService/auth-service.service';

@Component({
  selector: 'angular-nxpoc-header',
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule,
    MatBadgeModule,
    MatIconModule,
    MatMenuModule,
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit, DoCheck {
  cartAdd = inject(AddCartService);
  authUSer = inject(AuthServiceService);
  cartCount!: number;
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  userDetails = JSON.parse(localStorage.getItem('user')!);
  userName: any = localStorage.getItem('user') === 'Guest' ? 'Guest' : this.userDetails.email.split('@')[0];
  //user: string = userName.email.split('@')[0];
  ngOnInit() {
    this.cartAdd.subjectCart$.subscribe((value: number) => {
      //   console.log(value);
      this.cartCount = value;
    });
  }
  ngDoCheck() {
    console.log(this.userName);
    // console.log(this.authUSer.userData);
  }
}
