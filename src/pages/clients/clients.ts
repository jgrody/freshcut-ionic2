import {Component} from '@angular/core';
import {
  NavController,
  ModalController
} from 'ionic-angular';
import {Auth} from '../../providers/auth/auth';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { NewClientModal } from './new/new';


@Component({
  selector: 'clients-page',
  templateUrl: 'template.html'
})
export class ClientsPage {
  pros: FirebaseListObservable<any[]>;
  clients: FirebaseListObservable<any[]>;
  private currentUser: any

  //private rootPage: any = StartPage;
  public options = {segment: 'pros'}

  constructor(
    public nav: NavController,
    public modalCtrl: ModalController,
    public authData: Auth,
    public af: AngularFire
  ) {

    this.currentUser = this.authData.fireAuth.currentUser;

    console.log(this.currentUser)
    this.clients = af.database.list('/'+ this.currentUser.uid + '/clients');

    this.authData = authData;

  }

  openAddModal(){
    let newClientModal = this.modalCtrl.create(NewClientModal, { userId: 8675309 });
    newClientModal.present();
  }
}
