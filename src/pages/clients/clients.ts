import {Component} from '@angular/core';
import {
  NavController,
  ModalController
} from 'ionic-angular';
import {Auth} from '../../providers/auth/auth';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { NewPersonModal } from './new/new';


@Component({
  selector: 'clients-page',
  templateUrl: 'template.html'
})
export class ClientsPage {
  clients: FirebaseListObservable<any[]>;
  pros: FirebaseListObservable<any[]>;

  private currentUser: any

  //private rootPage: any = StartPage;
  public options = {segment: 'clients'}

  constructor(
    public nav: NavController,
    public modalCtrl: ModalController,
    public authData: Auth,
    public af: AngularFire
  ) {

    this.currentUser = this.authData.fireAuth.currentUser;

    this.clients = af.database.list('/'+ this.currentUser.uid + '/clients');
    this.pros = af.database.list('/'+ this.currentUser.uid + '/pros');

    this.authData = authData;
  }

  openAddModal(){
    let newClientModal = this.modalCtrl.create(NewPersonModal, {
      clients: this.clients,
      pros: this.pros,
      segment: this.options.segment
    });
    newClientModal.present();
  }
}
