import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'overview.page.html',
  styleUrls: ['overview.page.scss']
})
export class OverviewPage {

  constructor(private router: Router) {
  }

  open(type: string) {
    this.router.navigate(['supervisor', 'tabs', 'create-post', type]);
  }
}
