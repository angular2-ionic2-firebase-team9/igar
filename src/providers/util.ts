import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs';
import {Camera, CameraOptions} from 'ionic-native';
import {Platform} from 'ionic-angular';
/*
 Generated class for the Util provider.

 See https://angular.io/docs/ts/latest/guide/dependency-injection.html
 for more info on providers and Angular 2 DI.
 */
@Injectable()
export class UtilService {

  constructor(public http: Http, private platform: Platform) {
    console.log('Hello Util Provider');
  }

  /**
   * 카메라 동작
   * @returns {any}
   */
  onCamera() {
    const cameraOption: CameraOptions = {destinationType: Camera.DestinationType.DATA_URL};
    return Observable.fromPromise(Camera.getPicture(cameraOption));
  }

  /**
   * 카메라 캐쉬 클리어
   */
  cameraCleanup() {
    Camera.cleanup()
    .then(void 0)
    .catch((error) => console.error(error));

  }

   isMobile() {
    if (this.platform.is('ios') || this.platform.is('android')) {
      return true;
    }
    return false;
  }

}
