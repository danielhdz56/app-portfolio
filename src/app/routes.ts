import { Routes, Route } from '@angular/router';
import { ContactMeComponent, HomeGridComponent } from './containers';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeGridComponent
  },
  {
    path: 'contact-me',
    component: ContactMeComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];
