import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormularioPage } from '../formulario/formulario';
import { GestosPage } from '../gestos/gestos';
import { ListasPage } from '../listas/listas';
import { LoginPage } from '../login/login';
import { RegistroPage } from '../registro/registro';
import { LoginFacebookPage } from '../login-facebook/login-facebook';
import { CamaraPage } from '../camara/camara';
import { GpsPage } from '../gps/gps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goFormulario(){
    this.navCtrl.push(FormularioPage);
  }
  goGestos(){
    this.navCtrl.push(GestosPage);
  }
  goListas(){
    this.navCtrl.push(ListasPage);
  }
  goFacebook(){
    this.navCtrl.push(LoginFacebookPage);
  }
  goLogin(){
    this.navCtrl.push(LoginPage);
  }
  goRegistro(){
    this.navCtrl.push(RegistroPage);
  }
  goCamara(){
    this.navCtrl.push(CamaraPage);
  }
  goGps(){
    this.navCtrl.push(GpsPage);
  }

}
