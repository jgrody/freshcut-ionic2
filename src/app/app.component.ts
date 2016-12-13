import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, NavController } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import firebase from 'firebase';

//Pages
import { LoginPage } from '../pages/login/login';
import { AdminPage } from '../pages/admin/admin';
import { Auth } from '../providers/auth/auth';

import {TabsPage} from '../components/tabs/tabs';

@Component({
  template: `<ion-nav [root]="rootPage"></ion-nav>`
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any;
  fireAuth: any;

  constructor(
    platform: Platform,
    fireAuth: Auth,
  ) {

    this.fireAuth = fireAuth;

    firebase.auth().onAuthStateChanged((_currentUser) => {
      if (_currentUser) {
        console.log("_curr:", _currentUser);
        if (_currentUser.email.match('admin@freshcut.com')) {
          console.log('admin');
          this.nav.setRoot(AdminPage)
        } else {
          console.log('regular user');
          this.nav.setRoot(TabsPage)
        }
      } else {
        this.nav.setRoot(LoginPage)
      }
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
