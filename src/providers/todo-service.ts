import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';
import {AngularFire} from 'angularfire2';

/*
 Generated class for the TodoService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */

export interface iTodo{
  title:string,
  content:string
}

const data = [1, 2, 3, 4, 5, 6, 7];
@Injectable()
export class TodoService {

  constructor(public af: AngularFire) {
    console.log('Hello TodoService Provider');
  }

  getData() {
    return data;
  }
  createTodo(todo) {
    this.af.database.list('/todo').push(todo);
  }
}
