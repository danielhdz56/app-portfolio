import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
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
    CommonModule
  ]
})
export class ComponentsModule { }
