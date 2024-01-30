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

  cards = [
    {
      name: 'Money',
      amount: '$30000',
      percent: '3%',
      icon: 'ni ni-money-coins',
    },
    {
      name: 'Users',
      amount: '$30000',
      percent: '3%',
      icon: 'ni ni-world',
    },
  ];
}
