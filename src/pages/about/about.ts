import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {TodoService} from '../../providers/todo-service';
import {TodoCreatePage} from '../todo-create/todo-create';
import {TodoDetailPage} from '../todo-detail/todo-detail';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  todoData;
  todoInit: number[];
  moveAddPage = TodoCreatePage;

  constructor(public navCtrl: NavController,
              private todoService: TodoService,
              private navParams: NavParams) {

    //categoryId가 없을 때 null로 들어와서 전체 쿼리하려고 undefined
    let categoryId = navParams.get('categoryId') ?
      navParams.get('categoryId').toString() : undefined;

    // this.todoData = this.todoService.getData();
    this.todoData =
      this.todoService.getTodoList(categoryId).share();
    /*this.todoData
     .subscribe((data) => {
     console.log(data);
     },
     (error) => {
     console.error(error);
     },
     () => {
     console.log('complete');
     });*/
    // this.todoInit = [...this.todoData];
  }

  // init() {
  //   this.todoData = [...this.todoInit];
  // }

  search($event) {
    // this.init();
    // const value = $event.target.value;
    // if (value) {
    //   console.log($event);
    //   this.todoData = this.todoData.filter((item) => `${item}` === $event.target.value);
    // }
  }

  moveDetail(item) {
    this.navCtrl.push(TodoDetailPage,{item});
  }
}
