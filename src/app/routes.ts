import { Routes, Route } from '@angular/router';
import {
  ContactMeComponent,
  HomeGridComponent,
  InterestsComponent,
  LoginComponent,
  PortfolioComponent,
} from './containers';

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
    path: 'portfolio',
    component: PortfolioComponent
  },
  {
    path: 'interests',
    component: InterestsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: '',
  }
];
