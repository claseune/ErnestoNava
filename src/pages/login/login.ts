import { Component } from '@angular/core';
import { ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  private data: FormGroup;

  constructor(public navCtrl: NavController, public formBuilder: FormBuilder, public navParams: NavParams, public toastCtrl: ToastController) {
  this.data = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })
}

public showToast(text, time) {
    const toast = this.toastCtrl.create({
      message: text,
      duration: time
    });
    toast.present();
  };

  login() {

    firebase.auth().signInWithEmailAndPassword(this.data.controls['username'].value, this.data.controls['password'].value)
      .then((response) => {
        firebase.auth().onAuthStateChanged(function (user) {
          if (!user.emailVerified) {
            user.sendEmailVerification();
          }
        })
        console.log(response);
        this.showToast('Se ha Iniciado Sesion', 6000);
      })
      .catch((error) => {
        this.showToast(error.message, 4000);
        console.log(error.message)
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
