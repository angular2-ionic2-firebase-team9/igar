import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CategoryService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class CategoryService {

  constructor(public http: Http) {
    console.log('Hello CategoryService Provider');
  }

  getCategory() {
    return this.http.get('/assets/dump/category.json').map(response => response.json());
  }

}
