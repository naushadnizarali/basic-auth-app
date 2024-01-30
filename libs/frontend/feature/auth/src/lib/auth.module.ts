import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from '@frontend/utility/ui';
import { LoginComponent } from './components/login/login.component';
import { authRoutes } from './lib.routes';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(authRoutes), UiModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
})
export class AuthModule {}
