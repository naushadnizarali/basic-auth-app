import { Component } from '@angular/core';

@Component({
  selector: 'utility-layout-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  date = new Date().getFullYear();
}
