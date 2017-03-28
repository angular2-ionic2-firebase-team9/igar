import {Component, ViewChild} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TodoService} from '../../providers/todo-service';

/*
 Generated class for the TodoCreate page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-todo-create',
  templateUrl: 'todo-create.html'
})
export class TodoCreatePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private todoService: TodoService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodoCreatePage');
  }

  createTodo(value){
    console.log(value);
    this.todoService.createTodo(value);
  }

}
