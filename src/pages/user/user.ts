import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {UserProvider} from "../../providers/user-provider";
/*
  Generated class for the User page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

interface User {
  name: string;
  id: string;
}


@Component({
  selector: 'page-user',
  templateUrl: 'user.html'
})
export class UserPage {


  users : Array<User>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public userService : UserProvider) {


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');

    this.users = this.userService.getUers();

  }

}
