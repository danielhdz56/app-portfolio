// ANGULAR
import { AuthenticationService } from './services';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatGridListModule,
  MatInputModule,
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

// NGRX
import { reducers, metaReducers } from './store';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { AccountEffects } from './effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
// OTHER
import { APP_ROUTES } from './routes';
import { environment } from '../environments/environment'; // Angular CLI environment

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
    EffectsModule.forRoot([
      AccountEffects,
    ]),
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatGridListModule,
    MatInputModule,
    ReactiveFormsModule,
    RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadAllModules}),
    StoreModule.forRoot(reducers, {metaReducers}),
    !environment.production ? StoreDevtoolsModule.instrument({ maxAge: 50 }) : [],
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
