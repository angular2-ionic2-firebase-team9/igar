import { SignupPage } from './../signup/signup';
import { AuthService } from './../../providers/auth-service';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, Loading } from 'ionic-angular';
import { NgForm } from '@angular/forms';
import { TabsPage } from './../tabs/tabs';

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
  private loading: Loading;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, public authService: AuthService, 
    public alertCtrl: AlertController, public loadingCtrl: LoadingController) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Login..."
    });
    this.loading.present();
  }

  hideLoading(){
    this.loading.dismiss();
  }

  register() {
    this.navCtrl.setRoot(SignupPage);
  }

  login() {
    this.showLoading();
    this.authService.signInWithEmail(this.email, this.password)
      .then(res => this.loginSuccess(res))
      .catch(res => this.loginError(res));
  }

  loginSuccess(res) {
    this.hideLoading();
    this.navCtrl.setRoot(TabsPage);
  }

  loginError(res) {
    this.hideLoading();

    let alert = this.alertCtrl.create({
      title: res.code,
      subTitle: res.message,
      buttons: ['OK']
    });
    alert.present();
  }
}
