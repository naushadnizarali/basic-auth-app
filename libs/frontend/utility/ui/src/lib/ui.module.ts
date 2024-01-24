import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
// import { primeNgModules } from './frameworks/primeng.modules';
import { DialogModule } from 'primeng/dialog';
import { primengProviders } from './frameworks/primeng.providers';

@NgModule({
  imports: [CommonModule, DialogModule],
  exports: [DialogModule],
  providers: [...primengProviders],
})
export class UiModule {}
