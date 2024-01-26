import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { primeNgModules } from './frameworks/primeng.modules';
import { DialogModule } from 'primeng/dialog';
import { primengProviders } from './frameworks/primeng.providers';

@NgModule({
  imports: [CommonModule, DialogModule, FormsModule],
  exports: [DialogModule, FormsModule],
  providers: [...primengProviders],
})
export class UiModule {}
