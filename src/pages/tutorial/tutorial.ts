import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TutorialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html',
})
export class TutorialPage {

  tuto: any;
  content: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.getTuto();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TutorialPage');
  }

  getTuto() {
    this.tuto = this.navParams.data.tuto;
    this.content = this.tuto.content.rendered;
  }

}
