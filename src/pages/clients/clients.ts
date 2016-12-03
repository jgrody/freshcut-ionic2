import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {Auth} from '../../providers/auth/auth';
import {TabsPage} from '../../components/tabs/tabs';

@Component({
  selector: 'clients-page',
  templateUrl: 'template.html'
})
export class ClientsPage {
  //private rootPage: any = StartPage;
  constructor( public nav: NavController, public authData: Auth) {
    this.authData = authData;
  }
}
