import { Component, ViewChild } from '@angular/core';
import { Nav, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AboutPage } from '../about/about';
import { CategoryService } from '../../providers/category-service';
import { Category } from '../../models/category';

@Component({
  selector: 'category-nav',
  templateUrl: 'sidenav.html'
})

export class SideNav {
  @ViewChild(Nav) nav: Nav;

  //todo: todo페이지와 연결해야함. HomePage -> AboutPage
  rootPage: any = HomePage;

  categories: Array<Category>;

  constructor(public navCtrl: NavController, public categoryService : CategoryService) {
    // used for an example of ngFor and navigation
    categoryService.getCategory().subscribe(data => this.categories = data);
  }

  openCategory(category) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(category);



    let categoryId = (category) ? category.id : null;
    console.log(categoryId)
    this.nav.setRoot(AboutPage, { categoryId: categoryId });
    // this.navCtrl.push(AboutPage);
  }
}
