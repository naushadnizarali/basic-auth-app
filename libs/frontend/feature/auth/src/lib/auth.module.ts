import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from '@frontend/utility/ui';
import { LoginComponent } from './components/login/login.component';
import { authRoutes } from './lib.routes';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(authRoutes), UiModule],
  declarations: [LoginComponent, DashboardComponent],
  exports: [LoginComponent, DashboardComponent],
})
export class AuthModule {}
