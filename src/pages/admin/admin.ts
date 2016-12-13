import {Component} from '@angular/core';
import {
  NavController,
  ModalController
} from 'ionic-angular';
import {Auth} from '../../providers/auth/auth';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

import { CategoriesPage } from './categories/categories'
// import { ProductsPage } from './products/products'

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html'
})
export class AdminPage {
  private currentUser: any

  constructor(
    public nav: NavController,
    public modalCtrl: ModalController,
    public authData: Auth,
    public af: AngularFire
  ){

    this.authData = authData;
    this.nav = nav;
    this.currentUser = this.authData.currentUser;
  }

  goToCategories(){
    this.nav.push(CategoriesPage)
  }

  goToProducts(){
    // this.nav.push(ProductsPage)
  }

  ionViewDidLoad() {
  }

}
