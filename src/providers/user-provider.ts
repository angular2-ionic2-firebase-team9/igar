import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/

interface User {
  firstName: string;
  lastName: string;
}



@Injectable()
export class UserProvider {

  constructor(public http: Http) {
    console.log('Hello UserProvider Provider');
  }


  getUers (){





    return [{
      name : 'AAAA',
      id : '@bin'
    }, {
      name : 'BBB',
      id : '@luke'
    }]

  }
}
