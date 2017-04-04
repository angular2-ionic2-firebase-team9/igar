import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user-provider';
import { User } from '../../models/User'
import { Storage } from '@ionic/storage';
import { AuthService } from '../../providers/auth-service';
import { AlertController } from 'ionic-angular';


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

  myEmail: string;
  users: User[];
  friends: string[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams, public userProvider: UserProvider,
    public authService: AuthService, public storage: Storage,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserPage');
    this.myEmail = this.authService.getMyInfo().email;
    
    this.getUsersToDB();

    // this.userProvider.load().subscribe(users => {
    //    this.users = users;
    //    this.setUsersToDB(this.users);
    //  });
    this.userProvider.getMyQueryOb().subscribe(users =>{
      
      if(users.length){
        this.friends = users[0].friend;
        this.setUsersToDB(this.users);
      }
    });
    this.userProvider.findMyInfo(this.myEmail);

    this.userProvider.getQueryObservable().subscribe(users =>{
      
      if(users.length){
        this.userProvider.update(users[0])
        // .subscribe(users =>{

        // })
      }else{
        let alert = this.alertCtrl.create({
          subTitle: 'No User',
          buttons: ['OK']
        });
        alert.present();
      }
    })

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

  addFriend() {
    let alert = this.alertCtrl.create({
      title: 'Add Friend',
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {

          }
        },
        {
          text: 'Add',
          handler: data => {

            if(this.myEmail === data.email){
              let alert = this.alertCtrl.create({
                subTitle: "Can't add your self.",
                buttons: ['OK']
              });
              alert.present();
            }else{
              this.userProvider.findFriend(data.email);
            }
            
          }
        }
      ]
    });
    alert.present();
  }

  sendToDo(user: User) {
    alert('Create ToDo to ' + user.name);
  }

  call(user: User) {
    alert('Call ' + user.name);
  }

}
