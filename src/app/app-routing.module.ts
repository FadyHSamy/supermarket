import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/',
    pathMatch: 'full',
  },
  {
    path: 'homepage',
    loadChildren: () =>
      import('./pages/homepage/homepage.module').then(
        (m) => m.HomepagePageModule
      ),
  },
  {
    path: 'navbar',
    loadChildren: () => import('./shared/navbar/navbar/navbar.module').then( m => m.NavbarPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
