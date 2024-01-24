import { Component, Injector } from '@angular/core';
import { ComponentBase } from '@frontend/utility/common';

@Component({
  selector: 'feature-auth-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent extends ComponentBase {
  constructor(injector: Injector) {
    super(injector);
  }

  // override async ngOnInit(): Promise<void> {
  //   const response = await this.get<any[]>(
  //     'https://jsonplaceholder.typicode.com/todos/1'
  //   );
  //   console.log(response);
  // }
}
