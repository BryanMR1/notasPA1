import { Routes } from '@angular/router';
import { Home } from './presentation/views/home/home';
import { NewEnergyReport } from './presentation/views/new-energy-report/new-energy-report';

export const monitoringRoutes: Routes = [
  {
    path: 'home',
    component: Home
  },
  {
    path: 'energy-reports/new',
    component: NewEnergyReport
  }
];
