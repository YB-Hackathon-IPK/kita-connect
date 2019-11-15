import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ParentsPage } from './parents.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: ParentsPage,
    children: [
      {
        path: 'timeline',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./timeline/timeline.module').then(m => m.TimelineModule)
          }
        ]
      },
      {
        path: 'favorites',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./favorites/favorites.module').then(m => m.FavoritesModule)
          }
        ]
      },
      {
        path: 'highlights',
        children: [
          {
            path: '',
            loadChildren: () =>
              import('./highlights/highlights.module').then(m => m.HighlightsModule)
          }
        ]
      },
      {
        path: '',
        redirectTo: '/parents/tabs/timeline',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/parents/tabs/timeline',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentsPageRoutingModule {
}
