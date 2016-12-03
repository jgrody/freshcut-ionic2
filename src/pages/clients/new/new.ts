import {Component} from '@angular/core';

import {FormBuilder, Validators} from '@angular/forms';

import {
  NavParams,
  ViewController
} from 'ionic-angular';

@Component({
  templateUrl: 'template.html'
})

export class NewClientModal {
  public newClientForm: any;
  private clientList: any;

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController,
    public formBuilder: FormBuilder,
  ) {

    this.clientList = params.get('clients');

    this.newClientForm = formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      zipcode: ['', Validators.required],
    });
  }

  addClient(){
    this.clientList.push({
      name: this.newClientForm.value.name,
      phone: this.newClientForm.value.phone,
      zipcode: this.newClientForm.value.zipcode,
    }).then(this.dismiss())
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
