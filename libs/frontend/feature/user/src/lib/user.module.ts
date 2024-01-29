import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from '@frontend/utility/ui';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { userRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(userRoutes), UiModule],
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
})
export class UserModule {}
