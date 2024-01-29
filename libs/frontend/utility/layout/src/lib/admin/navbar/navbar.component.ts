import { Component } from '@angular/core';

@Component({
  selector: 'utility-layout-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  dropdownPopoverShow = false;

  toggleDropdown(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }
}
