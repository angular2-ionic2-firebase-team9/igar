import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { AngularFireModule, FirebaseAuthState, AngularFireAuth, AuthProviders, AuthMethods } from "angularfire2";

/*
  Generated class for the AuthService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class AuthService {

  private authState: FirebaseAuthState;

  constructor(public http: Http, public auth$: AngularFireAuth) {
    console.log('Hello AuthService Provider');
    this.authState = auth$.getAuth();
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  signInWithEmail(email:string, password:string): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({
      email: email,
      password: password
    }, {
      provider: AuthProviders.Password,
      method: AuthMethods.Password
    });

  }

  signOut(): void {
    this.auth$.logout();
  }

}
