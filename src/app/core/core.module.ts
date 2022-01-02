import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { E404Component } from './e404/e404.component';

@NgModule({
  declarations: [
    HomeComponent,
    MenuComponent,
    E404Component
  ],
  exports: [
    HomeComponent,
    MenuComponent,
    E404Component
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
