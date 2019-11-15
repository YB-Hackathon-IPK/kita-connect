import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-create-post',
  templateUrl: 'create-post.page.html',
  styleUrls: ['create-post.page.scss']
})
export class CreatePostPage {
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(map => {
      console.log(map);
    });
  }

}
