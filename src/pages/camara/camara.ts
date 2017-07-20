import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import * as firebase from 'firebase';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'

/**
 * Generated class for the CamaraPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-camara',
  templateUrl: 'camara.html',
})
export class CamaraPage {
  myimage: any;
  pictures=[];
  datapictures: FirebaseListObservable<any>;
  storageRef = firebase.storage().ref();

  constructor(public navCtrl: NavController, public navParams: NavParams, public camera: Camera,public db: AngularFireDatabase) {
    this.datapictures=db.list('/pictures');
  }



  openCamera(){
    const options: CameraOptions ={
      quality: 60,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.CAMERA,
      allowEdit: true,
      correctOrientation: true,
      saveToPhotoAlbum: true,
      mediaType: 0
    }
    this.camera.getPicture(options).then((ImageData) => {
      var date=new Date();
      this.myimage="data:image/jpeg;base64," + ImageData;
      
      this.storageRef.child('pictures/'+ date+'.jpg').putString(this.myimage, 'base64');
      
      this.pictures.push(this.myimage);
      //let base64Image = 'data:image/jpeg;base64,' + imageData;
      window.localStorage.setItem('MyImage',this.myimage);
      var nuevaimagen;
      nuevaimagen = window.localStorage.getItem('MyImage');
      window.localStorage.removeItem('MyImage');
    }, (error) => {
      console.log(error);
      alert(error);
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CamaraPage');
  }

}
