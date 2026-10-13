import { Routes } from '@angular/router';
import { PageNotFound } from './shared/presentation/views/page-not-found/page-not-found';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: '',
    loadChildren: () =>
      import('./monitoring/monitoring.routes')
        .then(m => m.monitoringRoutes)
  },
  {
    path: '**',
    component: PageNotFound
  }
];
