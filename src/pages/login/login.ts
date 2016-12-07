import {
  NavController,
  LoadingController,
  ToastController
} from 'ionic-angular';
import {Component} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {Auth} from '../../providers/auth/auth';
import {RegisterPage} from '../register/register';
import {ForgotPage} from '../forgot/forgot';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public loginForm: any;

  constructor(
    public nav: NavController,
    public authData: Auth,
    public formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private toastCtrl: ToastController,
  ) {

    this.nav = nav;
    this.authData = authData;

    this.loginForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  loginUser(event){
    event.preventDefault();

    let loadingController = this.loadingController.create();

    loadingController.present();

    this.authData
      .loginUser(
        this.loginForm.value.email,
        this.loginForm.value.password
      ).then((authData: any) => {
        loadingController.dismiss();
      }).catch((error: any) => {
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

  goToSignup(){
    this.nav.push(RegisterPage);
  }

  goToResetPassword(){
    this.nav.push(ForgotPage);
  }
}
