import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';
import { ColorpikerPage } from '../colorpiker/colorpiker';


@IonicPage()
@Component({
  selector: 'page-bluetooth-serial',
  templateUrl: 'bluetooth-serial.html',
})
export class BluetoothSerialPage {

  devices: any;
  unpaireds: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public bths: BluetoothSerial) {
  }

  discoverUnpairedDevices()
  {
    console.log('Buscando...')
    this.bths.discoverUnpaired().then((resp) => {
      this.unpaireds = resp;
      console.log(this.unpaireds)

    }, (error) => {
      console.log(error)
    })
  }

  connectToDevice(id){
    this.bths.connect(id).subscribe(resp => {
      this.navCtrl.push(ColorpikerPage);
      //this.bths.write('CONECTED');
      console.log('ID: ' + id);
      console.log('Response: ' + resp);
    })
  }

  ionViewDidLoad() {
    this.bths.list().then((success) => {
      console.log(success);
      this.devices=success;
    }, (error) => {
      console.log(error);
    })
  }
}
