import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/*
 Generated class for the TodoDetail page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-todo-detail',
  templateUrl: 'todo-detail.html'
})
export class TodoDetailPage {
  todoDetail: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidLoad() {
    this.todoDetail = this.navParams.get('item');
  }

}
