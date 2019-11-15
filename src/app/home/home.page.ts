import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  navigateTo(path) {
    this.router.navigate(path);
  }
}
