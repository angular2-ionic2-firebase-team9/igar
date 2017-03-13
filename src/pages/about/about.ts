import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TodoService} from '../../providers/todo-service';
import {AddPage} from '../add/add';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  todoData: number[];
  todoInit: number[];
  moveAddPage = AddPage;

  constructor(public navCtrl: NavController,
              private todoService: TodoService) {
    this.todoData = this.todoService.getData();
    this.todoInit = [...this.todoData];
  }

  init() {
    this.todoData = [...this.todoInit];
  }

  search($event) {
    this.init();
    const value = $event.target.value;
    if (value) {
      console.log($event);
      this.todoData = this.todoData.filter((item) => `${item}` === $event.target.value);
    }
  }

}
