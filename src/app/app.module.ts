// ANGULAR
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatGridListModule,
  MatInputModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// COMPONENTS
import { AppComponent } from './app.component';
import {
  ContactMeComponent,
  HomeGridComponent,
  InterestsComponent,
  LoginComponent,
  PortfolioComponent,
  RegisterComponent,
} from './containers';
// MODULES
import { ComponentsModule } from './components';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
// OTHER
import { APP_ROUTES } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    ContactMeComponent,
    HomeGridComponent,
    InterestsComponent,
    LoginComponent,
    PortfolioComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadAllModules}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
