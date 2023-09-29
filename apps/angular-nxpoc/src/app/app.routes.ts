import { Route } from '@angular/router';
import { ProductDescriptionComponent } from './Components/ProductDescription/product-description.component';
import { FooterComponent } from './Components/Footer/footer.component';
import { AppMainContentComponent } from './Components/AppMainContent/app-main-content.component';

export const appRoutes: Route[] = [
  { path: 'clothStore', component: AppMainContentComponent },
  { path: '', redirectTo: 'clothStore', pathMatch: 'full' },
  {
    path: 'clothStore/productInfo/:productid',
    component: ProductDescriptionComponent,
  },
  { path: 'footer', component: FooterComponent },
];
