import { Component, Injector } from '@angular/core';
import { ComponentBase } from '@frontend/utility/common';

@Component({
  selector: 'utility-layout-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent extends ComponentBase {
  constructor(injector: Injector) {
    super(injector);
  }
}
