import { Component } from '@angular/core';
import { ToastController, IonicPage, NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import * as firebase from 'firebase';

//@IonicPage()
@Component({
  selector: 'page-registro',
  templateUrl: 'registro.html',
})
export class RegistroPage {
   private registroData: FormGroup;

  constructor(public toastCtrl: ToastController, public navCtrl: NavController, public navParams: NavParams, public formBuilder: FormBuilder) {
  this.registroData = this.formBuilder.group({
    registroMail: ['', Validators.required],
    registroPass: ['',Validators.required]
  })
}

public showToast(text, time) {
    const toast = this.toastCtrl.create({
      message: text,
      duration: time
    });
    toast.present();
  };

register() {
    firebase.auth().createUserWithEmailAndPassword( this.registroData.controls['registroMail'].value, this.registroData.controls['registroPass'].value)
    .then((response) => {
      this.showToast('Se ha registrado correctamente', 4000);
      console.log(response)    
    })
    .catch((error) => {
      this.showToast(error.message, 4000);
      console.log(error.message);
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistroPage');
  }

}
