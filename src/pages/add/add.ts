import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {UtilService} from '../../providers/util';

/*
 Generated class for the Add page.

 See http://ionicframework.com/docs/v2/components/#navigation for more info on
 Ionic pages and navigation.
 */
@Component({
  selector: 'page-add',
  templateUrl: 'add.html'
})
export class AddPage {
  imageList: String[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private util: UtilService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }

  clickCameraButton() {
    if (this.util.isMobile()) {
      this.util.onCamera()
      .subscribe((data) => {
          this.imageList.push(`data:image/jpeg;base64,${data}`);
        },
        (error) => {
          console.error(error);
        },
        () => {
          console.log('camera complete');
          this.util.cameraCleanup();
        });
    }
  }

}
