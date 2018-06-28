import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the TutorialesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class TutorialesProvider {

  apiUrl = 'http://www.inacayal.com/wp-json/wp/v2/posts?categories=76';

  constructor(public http: HttpClient) {
    console.log('Hello TutorialesProvider Provider');
  }

  getTutoriales() {
    return new Promise(resolve => {
      this.http.get(this.apiUrl).subscribe(data => { resolve(data) }, err => { console.log(err) })
    });
  }

}
