import {NavController, LoadingController, ToastController} from 'ionic-angular';
import {Component} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import {Auth} from '../../providers/auth/auth';
import {LoginPage} from '../login/login';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  public signupForm: any;

  constructor(
    public nav: NavController,
    public authData: Auth,
    public formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private toastCtrl: ToastController
  ) {

    this.nav = nav;
    this.authData = authData;

    this.signupForm = formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  signupUser(event){
    event.preventDefault();

    let loadingController = this.loadingController.create({
      content: 'Please wait...'
    });

    loadingController.present();

    this.authData
      .signupUser(
        this.signupForm.value.email,
        this.signupForm.value.password
      ).then((newUser: any) => {
        console.log(newUser);
        loadingController.dismiss();
        let toast = this.toastCtrl.create({
          message: 'User was added successfully',
          duration: 3000,
          position: 'top'
        });

        toast.present();
        this.nav.push(LoginPage);
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

  goToLogin(){
    this.nav.push(LoginPage);
  }
}
