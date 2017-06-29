import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { FormularioPage } from '../pages/formulario/formulario';
import { GestosPage } from '../pages/gestos/gestos';
import { ListasPage } from '../pages/listas/listas';
import { LoginPage } from '../pages/login/login';
import { RegistroPage } from '../pages/registro/registro';
import { EditPage } from '../pages/edit/edit';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

