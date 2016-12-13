import {Component} from '@angular/core';

import {
  FormBuilder,
  Validators,
} from '@angular/forms';

import {
  NavController,
  ModalController,
  NavParams,
  ViewController,
  AlertController,
} from 'ionic-angular';

import {Auth} from '../../../providers/auth/auth';

import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html'
})
export class CategoriesPage {
  private currentUser: any
  public categories: FirebaseListObservable<any[]>;
  public form: any;

  constructor(
    public authData: Auth,
    public af: AngularFire,
    public modalCtrl: ModalController,
    public alertCtrl: AlertController,
  ){

    this.authData = authData;

    this.currentUser = this.authData.currentUser;
    this.categories = af.database.list('/categories');
  }

  openAddModal(){
    let prompt = this.alertCtrl.create({
      title: 'New Category',
      message: 'Enter a name for the new category',
      inputs: [
        {
          name: 'name',
          placeholder: 'Name'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Save',
          handler: data => {
            this.categories.push({
              name: data.name,
              identifier: this.camelize(data.name)
            })
          }
        }
      ]
    });

    prompt.present();
  }

  openEditModal(category){
    let modal = this.modalCtrl.create(EditCategoryModal, {
      list: this.categories,
      category: category,
    })
    modal.present()
  }

  camelize(str) {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function(letter, index) {
      return index == 0 ? letter.toLowerCase() : letter.toUpperCase();
    }).replace(/\s+/g, '');
  }

}

@Component({
  selector: 'page-categories-edit',
  templateUrl: 'edit.html'
})

export class EditCategoryModal {
  private currentUser: any
  private list: any
  private category: any
  public form: any

  constructor(
    public nav: NavController,
    public authData: Auth,
    public af: AngularFire,
    public formBuilder: FormBuilder,
    public params: NavParams,
    public viewCtrl: ViewController,
  ){

    this.form = formBuilder.group({
      name: ['', Validators.required],
    });

    this.authData = authData;
    this.currentUser = this.authData.currentUser;
    this.category = params.get('category');
    this.list = params.get('list');
  }

  save(){
    this.list.update(this.category.$key, {
      name: this.form.value.name
    }).then(this.dismiss())
  }


  delete(){
    this.list.remove(this.category.$key)
    // .catch((data)=>{
    //   console.log("catch:", data);
    // })
    // .then((data)=>{
    //   console.log("then:", data);
    // })
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }
}
