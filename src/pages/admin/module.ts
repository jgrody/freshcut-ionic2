//import { BrowserModule } from '@angular/platform-browser';

import { Platform } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { AdminPage } from './admin';
import { CategoriesPage } from './categories/categories';
import { EditCategoryModal } from './categories/categories';
// import { ProductPage } from './products/products';

@NgModule({
  imports: [
    IonicModule,
  ],
  declarations: [
    AdminPage,
    CategoriesPage,
    EditCategoryModal
  ],
  bootstrap: [],
  entryComponents: [
    AdminPage,
    CategoriesPage,
    EditCategoryModal
  ],
  providers: [

  ]
})
export class AdminModule { }
