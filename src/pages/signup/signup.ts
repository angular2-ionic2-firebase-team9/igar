import { AuthService } from './../../providers/auth-service';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';

/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {

  private email: string;
  private password: string;
  private passwordConfirm: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  signup(){

  }
}
