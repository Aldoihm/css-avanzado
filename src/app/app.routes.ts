import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', loadComponent: () => import('./home/home.component').then(m => m.HomeComponent) },
  { path: 'position', loadChildren: () => import('./position/routes') },
  { path: 'position2', loadChildren: () => import('./position2/routes') },
  { path: 'variables', loadChildren: () => import('./variables/routes') }
];
