import { Component, Injector } from '@angular/core';
import { ComponentBase } from '@frontend/utility/common';
import { IAuth } from '@shared/interfaces';

@Component({
  selector: 'feature-auth-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent extends ComponentBase {
  model = <IAuth>{};
  constructor(injector: Injector) {
    super(injector);
  }

  override ngOnInit(): Promise<void> | void {
    console.log('isLoggedIn', this.isLoggedIn);
    if (this.isLoggedIn) {
      this.navigate('/u/dashboard');
    }
  }

  async doAuth() {
    if (!this.model || !this.model.email || !this.model.password) {
      return;
    }

    const response = await this.post('auth', this.model);

    if (!response.isSuccess) {
      this.showErrorMessage(response.message);
      return;
    }

    this.authService.setAuthSession(response.data);

    this.navigate('/u/dashboard');
  }
}
