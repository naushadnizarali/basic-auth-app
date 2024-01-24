import {
  AfterViewInit,
  Directive,
  Injector,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiHelperService } from '@frontend/utility/services';
import { TApiResponse } from '@shared/interfaces';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Directive()
export class ComponentBase implements OnInit, OnDestroy, AfterViewInit {
  readonly apiHelperService: ApiHelperService;

  dialogRef: DynamicDialogRef | undefined;
  dialogService: DialogService;
  confirmationService: ConfirmationService;
  messageService: MessageService;
  router: Router;

  constructor(private injector: Injector) {
    this.apiHelperService = this.injector.get(ApiHelperService);
    this.dialogService = this.injector.get(DialogService);
    this.router = this.injector.get(Router);
    this.confirmationService = this.injector.get(ConfirmationService);
    this.messageService = this.injector.get(MessageService);
  }

  // lifecycle hooks start here
  ngOnInit(): Promise<void> | void {
    Promise.resolve();
  }

  ngOnDestroy(): Promise<void> | void {
    Promise.resolve();
  }

  ngAfterViewInit(): Promise<void> | void {
    Promise.resolve();
  }
  // lifecycle hooks end here

  // http methods start here
  async getRaw(
    endpoint: string,
    params?: Record<string, string | number | boolean>
  ): Promise<TApiResponse> {
    return this.apiHelperService.getRaw(
      `http://localhost:3344/api/${endpoint}`,
      params
    );
  }

  async get<T>(
    endpoint: string,
    params?: Record<string, string | number | boolean>
  ): Promise<TApiResponse<T>> {
    return this.apiHelperService.get<T>(
      `http://localhost:3344/api/${endpoint}`,
      params
    );
  }

  async post<T>(
    endpoint: string,
    body?: unknown,
    params?: Record<string, string | number | boolean>
  ): Promise<TApiResponse<T>> {
    return this.apiHelperService.post<T>(
      `http://localhost:3344/api/${endpoint}`,
      body,
      params
    );
  }

  async put<T>(
    endpoint: string,
    body?: unknown,
    params?: Record<string, string | number | boolean>
  ): Promise<TApiResponse<T>> {
    return this.apiHelperService.put<T>(
      `http://localhost:3344/api/${endpoint}`,
      body,
      params
    );
  }

  async delete<T>(
    endpoint: string,
    params?: Record<string, string | number | boolean>
  ): Promise<TApiResponse<T>> {
    return this.apiHelperService.delete<T>(
      `http://localhost:3344/api/${endpoint}`,
      params
    );
  }

  // router methods start here
  navigate(
    path: string,
    options?: {
      params?: Record<string, string | number | boolean>;
      replaceUrl?: boolean;
      relativeTo?: ActivatedRoute | null | undefined;
    }
  ): void {
    this.router.navigate([path ? path : null], {
      queryParams: options?.params,
      replaceUrl: options?.replaceUrl,
      relativeTo: options?.relativeTo,
    });
  }
  // router methods end here

  // confirmation dialog or popup start here (primeng)
  // pass event.target so that will be make popup without target element that is dialog
  confirmDialog(options: {
    message: string;
    header?: string;
    icon?: string;
    target?: EventTarget;
    accept?: () => void;
    reject?: () => void;
  }): void {
    this.confirmationService.confirm({
      message: options.message,
      header: options.header,
      target: options.target,
      icon: options.icon,
      accept: options.accept,
      reject: options.reject,
    });
  }
  // confirmation dialog or popup end here

  // messages or toast start here (primeng)
  showSuccessMessage(message: string): void {
    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: message,
    });
  }

  showErrorMessage(message: string): void {
    this.messageService.add({
      severity: 'error',
      summary: 'Error',
      detail: message,
    });
  }
  // messages or toast end here
}
