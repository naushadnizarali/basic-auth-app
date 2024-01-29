import {
  AfterViewInit,
  Directive,
  Injector,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '@frontend/utility/environments';
import { ApiHelperService, AuthService } from '@frontend/utility/services';
import { IActionResult, ISession, TApiResponse } from '@shared/interfaces';
import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';

@Directive()
export class ComponentBase implements OnInit, OnDestroy, AfterViewInit {
  readonly apiHelperService: ApiHelperService;
  readonly authService: AuthService;

  dialogRef: DynamicDialogRef | undefined;
  dialogService: DialogService;
  confirmationService: ConfirmationService;
  messageService: MessageService;
  router: Router;

  constructor(private injector: Injector) {
    this.apiHelperService = this.injector.get(ApiHelperService);
    this.authService = this.injector.get(AuthService);
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
      `${environment.baseApiUrl}${endpoint}`,
      params
    );
  }

  async get<T>(
    endpoint: string,
    params?: Record<string, string | number | boolean>
  ): Promise<IActionResult> {
    return this.apiHelperService.get<T>(
      `${environment.baseApiUrl}${endpoint}`,
      params
    );
  }

  async post<T>(
    endpoint: string,
    body?: unknown,
    params?: Record<string, string | number | boolean>
  ): Promise<IActionResult> {
    return this.apiHelperService.post<T>(
      `${environment.baseApiUrl}${endpoint}`,
      body,
      params
    );
  }

  async put<T>(
    endpoint: string,
    body?: unknown,
    params?: Record<string, string | number | boolean>
  ): Promise<IActionResult> {
    return this.apiHelperService.put<T>(
      `${environment.baseApiUrl}${endpoint}`,
      body,
      params
    );
  }

  async delete<T>(
    endpoint: string,
    params?: Record<string, string | number | boolean>
  ): Promise<IActionResult> {
    return this.apiHelperService.delete<T>(
      `${environment.baseApiUrl}${endpoint}`,
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
  showSuccessMessage(message: string | undefined): void {
    this.messageService.add({
      key: 'controls-toast',
      severity: 'success',
      summary: 'Success',
      detail: message,
    });
  }

  showErrorMessage(message: string | undefined): void {
    this.messageService.add({
      key: 'controls-toast',
      severity: 'error',
      summary: 'Error',
      detail: message,
    });
  }

  // Auth service start here
  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn;
  }

  get currentUserSession(): ISession | null {
    return this.authService.currentUserSession;
  }

  get permisssions() {
    return this.authService.permisssions as string[];
  }

  get rolePermisssion() {
    return this.authService.rolePermisssion as string[];
  }

  get userName() {
    return this.authService.userName as string;
  }

  get firstName() {
    return this.authService.firstName as string;
  }

  get userType() {
    return this.authService.userType as string;
  }

  get userTypeId() {
    return Number(this.authService.userTypeId);
  }

  get userId() {
    return Number(this.authService.userId);
  }

  logout() {
    this.authService.logout();
    this.navigate('/');
  }

  // Auth service end here
}
