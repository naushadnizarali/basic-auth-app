import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ApiHelperService } from './api-helper.service';
import { AuthService } from './auth.service';

@NgModule({
  imports: [CommonModule],
  providers: [ApiHelperService, AuthService],
})
export class ServicesModule {}
