//import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { ForgotPage } from '../pages/forgot/forgot';
import { RegisterPage } from '../pages/register/register';

import { ClientsPage } from '../pages/clients/clients';
import { SettingsPage } from '../pages/settings/settings';
import { NewClientModal } from '../pages/clients/new/new';

import firebase from 'firebase'; // Big change from '* as firebase'.
import { AngularFireModule } from 'angularfire2';

import {
  ReactiveFormsModule
} from '@angular/forms';

import { Auth } from '../providers/auth/auth';

import { TabsPage } from '../components/tabs/tabs';

export const firebaseConfig = {
  apiKey: "AIzaSyB92aFEdoS5wtR44OaSkiix-LIB3FADtS0",
  authDomain: "freshcut.firebaseapp.com",
  databaseURL: "https://freshcut.firebaseio.com",
  storageBucket: "project-5391251911339566675.appspot.com",
  messagingSenderId: "908477229044"
};

firebase.initializeApp(firebaseConfig);


@NgModule({
  imports: [
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
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
    NewClientModal,
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
    NewClientModal,
  ],
  providers: [
    Auth,
  ]
})
export class AppModule { }
