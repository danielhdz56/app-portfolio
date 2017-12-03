import { Routes, Route } from '@angular/router';
import { HomeGridComponent } from './containers';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeGridComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];
