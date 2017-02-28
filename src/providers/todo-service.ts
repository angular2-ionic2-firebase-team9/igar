import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

/*
 Generated class for the TodoService provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */

const data = [1, 2, 3, 4, 5, 6, 7];
@Injectable()
export class TodoService {

  constructor() {
    console.log('Hello TodoService Provider');
  }

  getData() {
    return data;
  }

}
