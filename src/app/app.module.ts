import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppBoostrapModule } from './app-boostrap/app-boostrap.module';
import { AppComponent } from './app.component';

import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './/app-routing.module';
import { TablesComponent } from './tables/tables.component';

@NgModule({
  declarations: [AppComponent, MenuComponent, TablesComponent],
  imports: [BrowserModule, AppBoostrapModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
