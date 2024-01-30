import { Component, Injector, ViewEncapsulation } from '@angular/core';
import { ComponentBase } from '@frontend/utility/common';

@Component({
  selector: 'web-portal-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent extends ComponentBase {
  constructor(injector: Injector) {
    super(injector);
  }
}
