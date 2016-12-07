//import { BrowserModule } from '@angular/platform-browser';

import { Platform } from 'ionic-angular';
import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import {
  ReactiveFormsModule
} from '@angular/forms';

import { PeoplePage } from './people';
import { NewPersonModal } from './new/new';

@NgModule({
  imports: [
    IonicModule,
  ],
  declarations: [
    PeoplePage,
    NewPersonModal,
  ],
  bootstrap: [],
  entryComponents: [
    PeoplePage,
    NewPersonModal,
  ],
  providers: [

  ]
})
export class PeopleModule { }
