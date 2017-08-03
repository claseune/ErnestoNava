import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ColorpikerPage } from './colorpiker';

@NgModule({
  declarations: [
    ColorpikerPage,
  ],
  imports: [
    IonicPageModule.forChild(ColorpikerPage),
  ],
  exports: [
    ColorpikerPage
  ]
})
export class ColorpikerPageModule {}
