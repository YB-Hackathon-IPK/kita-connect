import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CreatePostPage } from './create-post.page';
import { ChildSelectorComponent } from '../child-selector/child-selector.component';
import { CreatePostSuccessPage } from '../create-post-success/create-post-success.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: 'success',
        component: CreatePostSuccessPage
      },
      {
        path: ':type',
        component: CreatePostPage
      }
    ])
  ],
  declarations: [
    CreatePostPage,
    CreatePostSuccessPage,
    ChildSelectorComponent
  ]
})
export class CreatePostModule {
}
