import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {UserProvider} from '../../providers/user-provider';
import {User} from '../../models/User'
/*
  Generated class for the User page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {

  users : User[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public userProvider : UserProvider) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');

    this.userProvider.load().subscribe(users => {
      this.users = users;
    });

  }

  sendToDo(user: User){
    alert('Create ToDo to ' + user.name);
  }

  call(user: User){
    alert('Call ' + user.name);
  }
}
