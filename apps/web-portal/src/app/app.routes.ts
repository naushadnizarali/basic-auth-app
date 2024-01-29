import { Route } from '@angular/router';
import { MainComponent } from '@frontend/utility/layout';

export const appRoutes: Route[] = [
  {
    path: 'auth',
    loadChildren: () =>
      import('@frontend/feature/auth').then((m) => m.AuthModule),
  },
  {
    path: 'u',
    component: MainComponent,
    loadChildren: () =>
      import('@frontend/feature/user').then((m) => m.UserModule),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '/auth/login',
  },
];
