//import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { ForgotPage } from '../pages/forgot/forgot';
import { RegisterPage } from '../pages/register/register';

import { ClientsPage } from '../pages/clients/clients';
import { SettingsPage } from '../pages/settings/settings';

import {
  /*FormsModule, */
  ReactiveFormsModule
} from '@angular/forms';

import { Auth } from '../providers/auth/auth';

import { TabsPage } from '../components/tabs/tabs';


@NgModule({
  imports: [
    IonicModule.forRoot(MyApp),
    ReactiveFormsModule
  ],
  declarations: [
    MyApp,
    LoginPage,
    ForgotPage,
    RegisterPage,
    TabsPage,
    ClientsPage,
    SettingsPage,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ForgotPage,
    RegisterPage,
    TabsPage,
    ClientsPage,
    SettingsPage,
  ],
  providers: [
    Auth,
  ]
})
export class AppModule { }
