import { Component } from '@angular/core';
import { AlertController, ModalController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import * as firebase from 'firebase';

import { EditPage } from '../edit/edit';

@IonicPage()
@Component({
  selector: 'page-listas',
  templateUrl: 'listas.html',
})
export class ListasPage {
  info: any;
  records: FirebaseListObservable<any>;
  private listasFormData: FormGroup;

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams, db: AngularFireDatabase, public FormBuilder: FormBuilder, public toastCtrl: ToastController, public alertCtrl: AlertController) {
    this.records = db.list('/personas');

      this.listasFormData = this.FormBuilder.group({
        nombre: ['',Validators.required],
        apellido: ['',Validators.required],
        hobby: ['',Validators.required]
      })
  }

 

  edit(key){
    let info = {
      key: key
    }
    this.modalCtrl.create(EditPage, info).present();
  }

  delete(key, name){
    let deleteToast = this.toastCtrl.create({
      position: 'top',
      message: name + ' ha sido borrado',
      duration: 4000
    });
    let deleteAlert = this.alertCtrl.create({
      title: 'Borrar',
      subTitle: 'Eliminaras a: ' + name,
      buttons: [{
          text: 'Cancelar',
          handler: () =>{
          }},{
          text: 'Ok',
          handler: () => {
            this.records.remove(key).then(_ => deleteToast.present())
          }}]})
    deleteAlert.present();
    console.log(key);
  };

 ionViewDidLoad() {
    console.log('ionViewDidLoad ListasPage');
  }
}
