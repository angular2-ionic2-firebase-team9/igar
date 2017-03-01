import { SignupPage } from './../signup/signup';
import { AuthService } from './../../providers/auth-service';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController  } from 'ionic-angular';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  private email: string;
  private password: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authService: AuthService, public alertCtrl: AlertController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  register(){
    this.navCtrl.setRoot(SignupPage);
  }

  login(){
    console.log('login', this.email, this.password);
    this.authService.signInWithEmail(this.email, this.password)
      .then(res=>this.loginSuccess(res))
      .catch(res=>this.loginError(res));
  }

  loginSuccess(res){

  }

  loginError(res){

    let alert = this.alertCtrl.create({
      title: res.code,
      subTitle: res.message,
      buttons: ['OK']
    });
    alert.present();
  }
}
