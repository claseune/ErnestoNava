import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CamaraPage } from './camara';

@NgModule({
  declarations: [
    CamaraPage,
  ],
  imports: [
    IonicPageModule.forChild(CamaraPage),
  ],
  exports: [
    CamaraPage
  ]
})
export class CamaraPageModule {}
