import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Auth} from '../../providers/auth/auth';
import {LoginPage} from '../login/login';

@Component({
  selector: 'clients-page',
  templateUrl: 'template.html'
})
export class SettingsPage {
  //private rootPage: any = StartPage;
  constructor( public nav: NavController, public authData: Auth) {
    this.authData = authData;
  }

  logOut(){
    this.authData.logoutUser().then(() => {
      this.nav.setRoot(LoginPage);
    });
  }
}
