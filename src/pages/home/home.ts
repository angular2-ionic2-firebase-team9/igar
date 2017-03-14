import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoryService } from '../../providers/category-service';
import { Category } from '../../models/category';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  categories : Category[];

  constructor(public navCtrl: NavController, public categoryService : CategoryService) {

   /* categoryService.load().subscribe(categories => {
      this.categories = categories;
    });*/
  }

  itemSelected(category: Category) {
    console.log(category)
  }
}
