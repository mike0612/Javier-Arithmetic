import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LibrePage } from './libre';

@NgModule({
  declarations: [
    LibrePage,
  ],
  imports: [
    IonicPageModule.forChild(LibrePage),
  ],
})
export class LibrePageModule {}
