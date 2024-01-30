import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ServicesModule } from '@frontend/utility/services';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogModule } from 'primeng/dialog';
import { DialogService } from 'primeng/dynamicdialog';
import { ToastModule } from 'primeng/toast';

const PROVIDERS = [DialogService, ConfirmationService, MessageService];

const MODULES = [DialogModule, FormsModule, ToastModule, ServicesModule];

@NgModule({
  imports: [CommonModule, ...MODULES],
  exports: [...MODULES],
  providers: [...PROVIDERS],
})
export class UiModule {}
