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
  selector: 'page-people',
  templateUrl: 'people.html'
})
export class PeoplePage {
  clients: FirebaseListObservable<any[]>;
  pros: FirebaseListObservable<any[]>;

  private currentUser: any
  public options = {
    segment: 'clients',
    showingSearch: false
  }

  constructor(
    public nav: NavController,
    public modalCtrl: ModalController,
    public authData: Auth,
    public af: AngularFire
  ){

    this.authData = authData;

    this.currentUser = this.authData.currentUser;

    this.clients = af.database.list('/'+ this.currentUser.uid + '/clients');
    this.pros = af.database.list('/'+ this.currentUser.uid + '/pros');
  }

  openAddModal(){
    let newClientModal = this.modalCtrl.create(NewPersonModal, {
      clients: this.clients,
      pros: this.pros,
      segment: this.options.segment
    });
    newClientModal.present();
  }

  ionViewDidLoad() {
  }

}
