import { Component, ViewChild } from '@angular/core';
import { Nav, NavController, AlertController } from 'ionic-angular';
import { AboutPage } from '../about/about';
import { CategoryService } from '../../providers/category-service';
import { Category } from '../../models/category';

@Component({
  selector: 'category-nav',
  templateUrl: 'sidenav.html'
})

export class SideNav {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = AboutPage;

  categories: Array<Category>;

  constructor(public navCtrl: NavController, public categoryService : CategoryService, private alertCtrl: AlertController) {
    // used for an example of ngFor and navigation
    categoryService.getCategory().subscribe(data => this.categories = data);
  }

  openCategory(category) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    // this.nav.setRoot(category);

    let categoryId = (category) ? category.id : null;
    this.nav.setRoot(AboutPage, { categoryId: categoryId });
    // this.navCtrl.push(AboutPage);
  }

  addCategory() {
    let alert = this.alertCtrl.create({
      title: '카테고리 추가',
      inputs: [
        {
          name: 'name',
          placeholder: '카테고리 이름'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: '추가',
          handler: data => {
            this.categoryService.add({name: data.name, id: ++this.categories.length});
          }
        }
      ]
    });
    alert.present();
  }
}
