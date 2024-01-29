import { Component, Injector } from '@angular/core';
import { ComponentBase } from '@frontend/utility/common';

@Component({
  selector: 'feature-user-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent extends ComponentBase {
  constructor(injector: Injector) {
    super(injector);
  }
}
