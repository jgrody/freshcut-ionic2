import {Component} from '@angular/core';

import {FormBuilder, Validators} from '@angular/forms';

import {
  NavParams,
  ViewController
} from 'ionic-angular';

@Component({
  templateUrl: 'template.html'
})

export class NewPersonModal {
  public newPersonForm: any;
  public segment: string;
  private clientList: any;
  private proList: any;

  constructor(
    public params: NavParams,
    public viewCtrl: ViewController,
    public formBuilder: FormBuilder,
  ) {

    this.clientList = params.get('clients');
    this.proList = params.get('pros');
    this.segment = params.get('segment');

    this.newPersonForm = formBuilder.group({
      name: ['', Validators.required],
      phone: ['', Validators.required],
      zipcode: ['', Validators.required],
    });

  }

  addPerson(){

    console.log('segment', this.segment)
    let list = (this.segment == 'clients') ? this.clientList : this.proList;
    list.push({
      name: this.newPersonForm.value.name,
      phone: this.newPersonForm.value.phone,
      zipcode: this.newPersonForm.value.zipcode,
    }).then(this.dismiss())
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
