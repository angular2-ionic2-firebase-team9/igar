import { Injectable } from '@angular/core';
import { AngularFire } from 'angularfire2';
import 'rxjs/add/operator/map';
import { Category } from '../models/category';

/*
  Generated class for the CategoryService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CategoryService {

  constructor(public af: AngularFire) {
    console.log('Hello CategoryService Provider');
  }

  getCategory() {
    // return this.http.get('/assets/dump/category.json').map(response => response.json());
    return this.af.database.list('/category');
  }

  add(category: Category) {
    return this.af.database.list('/category').push(category);
  }
}
