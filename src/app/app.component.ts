import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

//Pages
// import { ClientsPage } from '../pages/clients/clients';
import { LoginPage } from '../pages/login/login';

import firebase from 'firebase'; // Big change from '* as firebase'.

export const firebaseConfig = {
  apiKey: "AIzaSyB92aFEdoS5wtR44OaSkiix-LIB3FADtS0",
  authDomain: "freshcut.firebaseapp.com",
  databaseURL: "https://freshcut.firebaseio.com",
  storageBucket: "project-5391251911339566675.appspot.com",
  messagingSenderId: "908477229044"
};

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = LoginPage;


  constructor(platform: Platform) {
    firebase.initializeApp(firebaseConfig);
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
