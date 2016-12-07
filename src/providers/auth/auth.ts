import { Injectable } from '@angular/core';

import firebase from 'firebase';

@Injectable()
export class Auth {
  public fireAuth: any;
  public userProfile: any;
  public currentUser: any;

  constructor() {
    this.fireAuth = firebase.auth();
    this.userProfile = firebase.database().ref('/userProfile');

    this.fireAuth.onAuthStateChanged((_currentUser) => {
      if (_currentUser) {
        this.currentUser = _currentUser;
      } else {
        // this.currentUser = {
        //   uid: "0mG4dGwPs8QpSzECjPkSjtol7tB3"
        // }
      }
    })
  }

  loginUser(email: string, password: string): any {
    console.log("Login User");
    return this.fireAuth.signInWithEmailAndPassword(email, password);
  }

  signupUser(email: string, password: string): any {
    return this.fireAuth.createUserWithEmailAndPassword(email, password);
  }

  resetPassword(email: string): any {
    return this.fireAuth.sendPasswordResetEmail(email);
  }

  logoutUser(): any {
    return this.fireAuth.signOut();
  }

}
