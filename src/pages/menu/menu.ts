import { Component } from '@angular/core';

import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RetosPage } from '../retos/retos';
import { LibrePage } from '../libre/libre';
import { MemoriaPage } from '../memoria/memoria';
import { RankingPage } from '../ranking/ranking';
import { PerfilPage } from '../perfil/perfil';
import { TutorialesPage } from '../tutoriales/tutoriales';
import { HomePage } from '../home/home';

/**
 * Generated class for the MenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  
  selector: 'page-menu',
  templateUrl: 'menu.html',
})
export class MenuPage {

  items = [
    {titulo: 'Perfil', img: '../../assets/imgs/perfil3.png', clases: 'container-flex background-green border-circle'},
    {titulo: 'Salir', img: '../../assets/imgs/retos.png', clases: 'container-flex background-purple border-circle'}
  ];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuPage');
  }

  public navegarARetos(){
    this.navCtrl.push(RetosPage);
  }

  public navegarALibre(){
    this.navCtrl.push(LibrePage);
  }

  public navegarAMemoria(){
    this.navCtrl.push(MemoriaPage);
  }

  public navegarARanking(){
    this.navCtrl.push(RankingPage);
  }

  public navegarAPerfil(){
    this.navCtrl.push(PerfilPage);
  }

  public navegarATutoriales(){
    this.navCtrl.push(TutorialesPage);
  }

  public navegarAInicio(){
    this.navCtrl.popToRoot();
  }


}
