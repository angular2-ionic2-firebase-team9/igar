import { SignupPage } from '../pages/signup/signup';
import { AuthService } from '../providers/auth-service';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { TodoService } from '../providers/todo-service';
import { UserPage } from "../pages/user/user";
import { LoginPage } from '../pages/login/login';
import { UserProvider } from "../providers/user-provider";
import { CategoryService } from "../providers/category-service";
import { AngularFireModule } from "angularfire2";
import { FormsModule } from '@angular/forms';
import { SideNav } from '../pages/sidenav/sidenav';
import { Storage  } from '@ionic/storage';

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBSlcnxZvqPrwIChYsuXAhreUOscaPP2Ao",
  authDomain: "igar-d2d82.firebaseapp.com",
  databaseURL: "https://igar-d2d82.firebaseio.com",
  storageBucket: "igar-d2d82.appspot.com",
  messagingSenderId: "22674753410"
};

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    UserPage,
    TabsPage,
    LoginPage,
    SignupPage,
    SideNav
  ],
  imports: [
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    UserPage,
    TabsPage,
    LoginPage,
    SignupPage,
    SideNav
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: IonicErrorHandler
  }, UserProvider, CategoryService, TodoService, AuthService, Storage ]
})
export class AppModule { }
