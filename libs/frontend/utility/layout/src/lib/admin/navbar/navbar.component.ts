import { Component, Injector } from '@angular/core';
import { ComponentBase } from '@frontend/utility/common';

@Component({
  selector: 'utility-layout-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent extends ComponentBase {
  constructor(injector: Injector) {
    super(injector);
  }
}
