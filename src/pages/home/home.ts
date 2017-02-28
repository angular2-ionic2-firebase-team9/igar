import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoryProvider } from '../../providers/category-provider';
import { Category } from '../../models/category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  categories : Category[];

  constructor(public navCtrl: NavController, public categoryProvider : CategoryProvider) {


    categoryProvider.load().subscribe(categories => {
      this.categories = categories;
    });
  }

  itemSelected(category: Category) {
    console.log(category)
  }

}
