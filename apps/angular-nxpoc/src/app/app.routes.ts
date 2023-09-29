import { Route } from '@angular/router';
import { ProductDescriptionComponent } from './Components/ProductDescription/product-description.component';
import { FooterComponent } from './Components/Footer/footer.component';
import { AppMainContentComponent } from './Components/AppMainContent/app-main-content.component';

export const appRoutes: Route[] = [
  {
    path: 'clothStore',
    component: AppMainContentComponent,
  },
  {
    path: '',
    redirectTo: 'clothStore',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./Components/Header/header.route').then((m) => m.headerRoutes),
  },
  {
    path: 'clothStore/productInfo/:productid',
    loadComponent: () =>
      import(
        './Components/ProductDescription/product-description.component'
      ).then((m) => m.ProductDescriptionComponent),
  },
  { path: 'footer', component: FooterComponent },
];
