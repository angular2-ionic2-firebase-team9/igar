import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { AuthService } from '../providers/auth-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage : any;

  constructor(platform: Platform, public authService: AuthService) {


    authService.isLoggedIn.subscribe(isLoggedIn => {
      if(isLoggedIn){
        console.log('authenticated')
        this.rootPage = TabsPage;
      }else{
        console.log('authenticated fail')
        this.rootPage = LoginPage;
      }

    });


    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }
}
