import {NavController, LoadingController, ToastController} from 'ionic-angular';
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
    private toastCtrl: ToastController
  ) {

    this.nav = nav;
    this.authData = authData;

    this.resetPasswordForm = formBuilder.group({
      email: ['', Validators.required],
    })
  }

  resetPassword(event){
    event.preventDefault();

    let loadingController = this.loadingController.create();

    this.authData
      .resetPassword(
        this.resetPasswordForm.value.email
      ).then((data: any) => {
        loadingController.dismiss();
        let toast = this.toastCtrl.create({
          message: 'Password reset link sent',
          duration: 3000,
          position: 'top'
        });
        toast.present();
        this.nav.push(LoginPage);
      })
      .catch((error: any) => {
        if (error) {
          loadingController.dismiss().then(() => {
            let toast = this.toastCtrl.create({
              message: error.message,
              position: 'top',
              showCloseButton: true,
              cssClass: 'error-toast'
            });
            toast.present();
          });
        }
      });
  }

  goToLogin(){
    this.nav.push(LoginPage);
  }
}
