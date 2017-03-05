import { Component } from '@angular/core';

import { SideNav } from '../sidenav/sidenav';
import { AboutPage } from '../about/about';
import { UserPage } from '../user/user';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = SideNav;
  tab2Root: any = AboutPage;
  tab3Root: any = UserPage;
  constructor() {

  }
}
