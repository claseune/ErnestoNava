import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Geolocation } from '@ionic-native/geolocation';
import { GoogleMaps } from '@ionic-native/google-maps';

import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database'
import { AngularFireAuthModule } from 'angularfire2/auth';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { FormularioPage } from '../pages/formulario/formulario';
import { GestosPage } from '../pages/gestos/gestos';
import { ListasPage } from '../pages/listas/listas';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';
import { EditPage } from '../pages/edit/edit';
import { LoginFacebookPage } from '../pages/login-facebook/login-facebook';
import { CamaraPage } from '../pages/camara/camara';
import { GpsPage } from '../pages/gps/gps';

export const config = {
    apiKey: "AIzaSyBqi2TQSb6-4jsFXU5boOUz3ug7k9oFCCw",
    authDomain: "compilacion1.firebaseapp.com",
    databaseURL: "https://compilacion1.firebaseio.com",
    projectId: "compilacion1",
    storageBucket: "",
    messagingSenderId: "464960867045"
  };
  firebase.initializeApp(config);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    FormularioPage,
    GestosPage,
    ListasPage,
    LoginPage,
    RegistroPage,
    EditPage,
    LoginFacebookPage,
    CamaraPage,
    GpsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    FormularioPage,
    GestosPage,
    ListasPage,
    LoginPage,
    RegistroPage,
    EditPage,
    LoginFacebookPage,
    CamaraPage,
    GpsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    Geolocation,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}

  ]
})
export class AppModule {}
