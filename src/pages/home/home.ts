import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TutorialesProvider } from '../../providers/tutoriales/tutoriales';
import { TutorialPage } from '../tutorial/tutorial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  tutoriales: any;

  constructor(public navCtrl: NavController, public tutorialesProvider: TutorialesProvider) {
    this.getTutoriales();
  }

  getTutoriales () {
    this.tutorialesProvider.getTutoriales().then(
      data => {
        this.tutoriales = data;
      }
    )
  }

  goTutorial(tuto) {
    this.navCtrl.push(TutorialPage, {tuto: tuto});
  }
}
