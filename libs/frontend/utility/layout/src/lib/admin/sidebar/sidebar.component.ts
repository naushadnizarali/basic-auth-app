import { Component } from '@angular/core';

@Component({
  selector: 'utility-layout-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  dropdownPopoverShow = false;
  dropdownPopoverShow2 = false;
  collapseShow = 'hidden';

  toggleDropdown(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }

  toggleDropdown2(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (this.dropdownPopoverShow) {
      this.dropdownPopoverShow = false;
    } else {
      this.dropdownPopoverShow = true;
    }
  }

  toggleCollapseShow(classes: string) {
    this.collapseShow = classes;
  }
}
