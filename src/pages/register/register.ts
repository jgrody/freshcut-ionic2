import {NavController, LoadingController, AlertController} from 'ionic-angular';
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
    private alertCtrl: AlertController
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
        let alert = this.alertCtrl.create({
          title: 'Success',
          subTitle: 'User Registered',
          buttons: ['Dismiss']
        });

        alert.present();
        this.nav.push(LoginPage);
      }).catch((error: any) => {
        if (error) {
          console.log("Error:" + error.code);
          loadingController.dismiss();
        }
      });
  }

  goToLogin(){
    this.nav.push(LoginPage);
  }
}
