import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SupervisorPage } from './supervisor.page';

const routes: Routes = [
  {
    path: '',
    component: SupervisorPage,
    children: [
      {
        path: 'overview',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./overview/overview.module').then(m => m.OverviewModule)
          }
        ]
      },
      {
        path: 'create-post',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./create-post/create-post.module').then(m => m.CreatePostModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/supervisor/overview',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'introduction',
    loadChildren: () =>
      import('./introduction/introduction.module').then(m => m.IntroductionModule)
  },
  {
    path: '',
    redirectTo: '/supervisor/tabs/overview',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SupervisorPageRoutingModule {
}
