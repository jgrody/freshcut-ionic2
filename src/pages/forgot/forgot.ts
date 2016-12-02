import {NavController, LoadingController, AlertController} from 'ionic-angular';
import {Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Auth} from '../../providers/auth/auth';
import {LoginPage} from '../login/login';

/*
Generated class for the ForgotPage page.

See http://ionicframework.com/docs/v2/components/#navigation for more info on
Ionic pages and navigation.
*/
@Component({
  selector: 'page-forgot',
  templateUrl: 'forgot.html'
})
export class ForgotPage {
  public resetPasswordForm: any;

  constructor(
    public nav: NavController,
    public authData: Auth,
    public formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private alertCtrl: AlertController
  ) {

    this.nav = nav;
    this.authData = authData;

    this.resetPasswordForm = formBuilder.group({
      email: ['', Validators.required],
    })
  }

  resetPassword(event){
    event.preventDefault();

    console.log(this.resetPasswordForm.value.email);
    let loading = this.loadingController.create({
      content: 'Please wait...'
    });

    this.authData.resetPassword(this.resetPasswordForm.value.email);
    loading.dismiss();
    let alert = this.alertCtrl.create({
      title: 'Success',
      subTitle: 'Password reset link sent',
      buttons: ['Dismiss']
    });
    alert.present();
    this.nav.push(LoginPage);
  }

  goToLogin(){
    this.nav.push(LoginPage);
  }
}
