import {Component, OnInit, Input, HostListener, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'ig-image-list-item',
  template: `<img [attr.src]="src" alt="image"/>`,
  styles: [`:host{
display: block;
}
img{
width:100%;
height:100%;
}

`]
})
export class IgImageListItemComponent implements OnInit {
  @Input() src;
  @Input() index: number;
  @Output() select: EventEmitter<{index: number, active: boolean}> = new EventEmitter<{index: number, active: boolean}>();
  active = false;

  constructor() {
  }

  ngOnInit() {
  }

  @HostListener('click', ['$event']) tab($event) {
    // console.log($event);
    this.active = !this.active;
    this.select.next({index: this.index, active: this.active});

  }

}

@Component({
  selector: 'ig-image-list',
  templateUrl: 'image.list.html'
})
export class IgImageListComponent implements OnInit {
  @Input() listData: string[];
  @Output() listDataChange: EventEmitter<string[]> = new EventEmitter<string[]>();
  selectedImageIndexMap: Map<number,boolean> = new Map();

  constructor() {
  }

  ngOnInit() {
  }

  toggleImage($event) {
    if ($event.active) {
      this.selectedImageIndexMap.set($event.index, $event.active);
    } else {
      this.selectedImageIndexMap.delete($event.index);
    }
    // console.log(this._selectedImageIndexMap );
  }

  deleteImage() {
    let i = -1;
    this.listData =
      this.listData.filter((item) => {
        i++;
        return !this.selectedImageIndexMap.has(i);
      });
    this.listDataChange.next(this.listData);
    this.selectedImageIndexMap.clear();
  }

  getSendImageList() {

  }
}
