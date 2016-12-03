import {Component} from '@angular/core';
import {
  NavParams,
  ViewController
} from 'ionic-angular';

@Component({
  templateUrl: 'template.html'
})

export class NewClientModal {
  constructor(
    public params: NavParams,
    public viewCtrl: ViewController,
  ) {
    console.log('UserId', params.get('userId'));
  }

  dismiss(){
    this.viewCtrl.dismiss();
  }

}
