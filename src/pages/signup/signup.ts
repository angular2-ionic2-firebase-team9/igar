import { User } from './../../models/User';
import { UserProvider } from './../../providers/user-provider';
import { LoginPage } from './../login/login';
import { AuthService } from './../../providers/auth-service';
import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, ToastController, Toast, LoadingController, Loading } from 'ionic-angular';
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
  private toast: Toast;
  private loading: Loading;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public authService: AuthService, public alertCtrl: AlertController,
    public toastCtrl: ToastController, public loadingCtrl: LoadingController,
    public userProvider: UserProvider) { }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: "Signup..."
    });
    this.loading.present();
  }

  hideLoading() {
    this.loading.dismiss();
  }

  makeToast(msg: string) {
    this.toast = this.toastCtrl.create({
      message: msg,
      duration: 1000,
      position: 'top'
    });
    this.toast.present();
    return this.toast;
  }

  signup() {

    if (this.passwordValidate()) {
      this.showLoading();
      this.authService.signUpWithEmail(this.email, this.password)
        .then(res => this.signupSuccess(res))
        .catch(res => this.signupError(res));
    } else {
      let alert = this.alertCtrl.create({
        subTitle: "Password not matched",
        buttons: ['OK']
      });
      alert.present();
    }

  }

  passwordValidate() {
    return this.password === this.passwordConfirm;
  }

  signupSuccess(res) {

    let user = {
      name: res.auth.email,
      email: res.auth.email
    }

    this.userProvider.save(user)
      .then(res => {
        this.hideLoading();
        this.makeToast("Signup Successfully.")
          .onDidDismiss(() => this.navCtrl.setRoot(LoginPage));
      })
      .catch(res => {
        this.hideLoading();
        this.alertCtrl.create({
          subTitle: res.message,
          buttons: ['OK']
        }).present();
      });
  }

  signupError(res) {
    this.hideLoading();
    this.alertCtrl.create({
      title: res.code,
      subTitle: res.message,
      buttons: ['OK']
    }).present();
  }

  goToLogin() {
    this.navCtrl.setRoot(LoginPage)
  }
}
