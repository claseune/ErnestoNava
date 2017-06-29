import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';

//@IonicPage()
@Component({
  selector: 'page-login-facebook',
  templateUrl: 'login-facebook.html',
})
export class LoginFacebookPage {
  private data: FormGroup;

  constructor(public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder,public toastCtrl: ToastController, public modalCtrl: ModalController) {
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

  loginFace() {
    var provider = new firebase.auth.FacebookAuthProvider();
    provider.addScope('user_birthday');
    firebase.auth().signInWithPopup(provider).then((result) => {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log(result + ' ' + user + ' ' + token);
      this.showToast('Se ha ingresado con Facebook correctamente', 6000);
      //this.showToast(result + ' ' + user + ' ' + token, 6000);
    }).catch(function (error) {
      //this.showToast(error.message, 6000);
      console.log('Error: ' + error);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginFacebookPage');
  }

}
