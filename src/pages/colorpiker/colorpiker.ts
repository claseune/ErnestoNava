import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ColorPickerModule } from 'ngx-color-picker';
import { BluetoothSerial } from '@ionic-native/bluetooth-serial';


@IonicPage()
@Component({
  selector: 'page-colorpiker',
  templateUrl: 'colorpiker.html',
})
export class ColorpikerPage {
  colorToSet: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,public bths: BluetoothSerial) {
  }

  onItemChange(selectedValue: string)
  {
    console.log(selectedValue.slice(4, -1));

    this.colorToSet = selectedValue.slice(4, -1);
  }

  setColor() {
    if (this.colorToSet) {
      this.bths.write(this.colorToSet).then((resp) => {

      }, (error) => {
        alert(error);
      });
      console.log(this.colorToSet)
      console.log("set color: " + this.colorToSet)
    }
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad ColorpikerPage');
  }

}
