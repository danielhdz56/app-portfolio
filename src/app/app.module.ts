// ANGULAR
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material';
// COMPONENTS
import { AppComponent } from './app.component';
import { ContactMeComponent, HomeGridComponent,  } from './containers';
// MODULES
import { ComponentsModule } from './components';
import { RouterModule, PreloadAllModules } from '@angular/router';
// OTHER
import { APP_ROUTES } from './routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeGridComponent,
    ContactMeComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ComponentsModule,
    MatGridListModule,
    RouterModule.forRoot(APP_ROUTES, {preloadingStrategy: PreloadAllModules}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
