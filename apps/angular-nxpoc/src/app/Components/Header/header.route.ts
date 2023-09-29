import { Route } from '@angular/router';
import { LoginComponent } from '../Login/login.component';
import { SignUpComponent } from '../SignUp/sign-up.component';

export const headerRoutes: Route[] = [
  { path: 'signup', component: SignUpComponent },
  { path: 'login', component: LoginComponent },
];
