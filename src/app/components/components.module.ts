// ANGULAR
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
// COMPONENTS
import { NavbarComponent } from './navbar';

const components = [
  NavbarComponent,
];

@NgModule({
  declarations: components,
  entryComponents: [],
  exports: components,
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule
  ]
})
export class ComponentsModule { }
