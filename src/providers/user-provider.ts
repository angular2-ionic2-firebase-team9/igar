import { User } from './../models/User';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Subject } from "rxjs/Subject";
import { AuthService } from "./auth-service";


/*
  Generated class for the UserProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/


@Injectable()
export class UserProvider {
  items: FirebaseListObservable<any[]>;
  userQueryObservable: FirebaseListObservable<any[]>;
  myQueryObservable: FirebaseListObservable<any[]>;
  queryKeyword: Subject<any>;
  myKeyword: Subject<any>;
  myEmail: string;
  myInfo: any;

  constructor(public http: Http, public af: AngularFire, public authService: AuthService) {
    console.log('Hello UserProvider Provider');
    this.queryKeyword = new Subject();  
    this.myKeyword = new Subject();  
    this.myEmail = this.authService.getMyInfo().email;
    
    this.userQueryObservable = this.af.database.list('/users', {
      query: {
        orderByChild: 'email',
        equalTo: this.queryKeyword 
      }
    });

    this.myQueryObservable = this.af.database.list('/users', {
      query: {
        orderByChild: 'email',
        equalTo: this.myKeyword 
      }
    });

    this.myQueryObservable.subscribe(users => {
      if(users.length){
        this.myInfo = users[0];
      }
    })
    this.myKeyword.next(this.myEmail)
  } 

  load() {
    this.items = this.af.database.list('/users');
    return this.af.database.list('/users');
  }

  save(user: User) {
    return this.af.database.list('/users').push(user);
  }

  update(user: any) {
    if(this.myInfo.friend && this.myInfo.friend.length){
      
    }else{
      this.myInfo.friend = [];
    }
    this.myInfo.friend.push(user.email);

    return this.af.database.list('/users').update(this.myInfo.$key, { friend: this.myInfo.friend});
  }

  getQueryObservable(){
    return this.userQueryObservable;
  }

  getMyQueryOb(){
    return this.myQueryObservable;
  }
  findMyInfo(email : String){
    this.myKeyword.next(email);
  }

  findFriend(email : String){
    this.queryKeyword.next(email);
  }

  getMyInfo(){
    return this.myInfo;
  }
}
