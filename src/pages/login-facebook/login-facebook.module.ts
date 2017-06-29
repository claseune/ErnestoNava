import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginFacebookPage } from './login-facebook';

@NgModule({
  declarations: [
    LoginFacebookPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginFacebookPage),
  ],
  exports: [
    LoginFacebookPage
  ]
})
export class LoginFacebookPageModule {}
