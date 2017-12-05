// ANGULAR
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatMenuModule
} from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
// COMPONENTS
import { NavbarComponent } from './navbar';
import { ProjectComponent } from './project';

const components = [
  NavbarComponent,
  ProjectComponent,
];

@NgModule({
  declarations: components,
  entryComponents: [],
  exports: components,
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatMenuModule,
    RouterModule,
  ]
})
export class ComponentsModule { }
