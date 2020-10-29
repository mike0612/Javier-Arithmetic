import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MemoriaPage } from './memoria';

@NgModule({
  declarations: [
    MemoriaPage,
  ],
  imports: [
    IonicPageModule.forChild(MemoriaPage),
  ],
})
export class MemoriaPageModule {}
