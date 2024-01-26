import { Route } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';

export const authRoutes: Route[] = [
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: 'dashboard', pathMatch: 'full', component: DashboardComponent },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login',
  },
];
