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

  async doAuth() {
    if (!this.model) {
      return;
    }

    const response = await this.post('auth', this.model);

    if (!response.isSuccess) {
      alert(JSON.stringify(response.errors));
      return;
    }

    this.authService.setAuthSession(response.data);

    this.navigate('/dashboard');
  }
}
