import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'web-portal-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  title = 'web-portal';
}
