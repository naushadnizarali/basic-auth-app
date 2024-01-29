import { Route } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';

export const userRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: '/u/dashboard' },
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
  // { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: 'dashboard',
  // },
];
