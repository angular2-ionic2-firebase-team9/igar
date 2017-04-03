import { User } from './../models/User';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/


@Injectable()
export class UserProvider {
  items: FirebaseListObservable<any[]>;

  constructor(public http: Http, public af: AngularFire) {
    console.log('Hello UserProvider Provider');
  }

  load() {
    this.items = this.af.database.list('/users');
    this.items.forEach(user=>console.error(user))
    
    // return this.http.get('/assets/dump/user.json').map(response => response.json());
    return this.af.database.list('/users');
  }

  save(user: User) {
    return this.af.database.list('/users').push(user);
  }
}
