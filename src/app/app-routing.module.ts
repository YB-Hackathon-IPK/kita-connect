import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'parents',
    loadChildren: () => import('./parents/parents.module').then(m => m.ParentsModule)
  },
  {
    path: 'supervisor',
    loadChildren: () => import('./supervisor/supervisor.module').then(m => m.SupervisorModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
