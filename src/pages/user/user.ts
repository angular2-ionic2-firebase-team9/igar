import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {UserProvider} from '../../providers/user-provider';
import {User} from '../../models/User'
import {Storage} from '@ionic/storage';

import {SQLite} from 'ionic-native';

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

  users: User[];

  constructor(public navCtrl: NavController,
              public navParams: NavParams, public userProvider: UserProvider,
              public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
    this.getUsersToDB();

    this.userProvider.load().subscribe(users => {
      this.users = users;
      this.setUsersToDB(this.users);
    });

  }

  setUsersToDB(users: User[]) {
    this.storage.ready().then(() => {
      this.storage.set('users', users).then((val) => {
        console.log('users saved!');
      });
    });
  }

  getUsersToDB() {
    this.storage.ready().then(() => {
      this.storage.get('users').then((users) => {
        this.users = users;
      })
    });
  }

  sendToDo(user: User) {
    alert('Create ToDo to ' + user.name);
  }

  call(user: User) {
    alert('Call ' + user.name);
  }
}
