import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { MatButtonModule } from '@angular/material/button';
import { HeaderComponent } from './Components/Header/header.component';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, MatButtonModule, HeaderComponent],
  selector: 'angular-nxpoc-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-nxpoc';
}
