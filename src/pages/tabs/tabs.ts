import { Component } from '@angular/core';

import { SideNav } from '../sidenav/sidenav';
import { UserPage } from '../user/user';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab2Root: any = SideNav;
  tab3Root: any = UserPage;
  constructor() {

  }
}
