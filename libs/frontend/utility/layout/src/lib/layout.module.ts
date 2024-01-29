import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from '@frontend/utility/ui';
import { FooterComponent } from './admin/footer/footer.component';
import { MainComponent } from './admin/main/main.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { RSidebarComponent } from './admin/r-sidebar/r-sidebar.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule, RouterModule, UiModule],
  declarations: [
    MainComponent,
    SidebarComponent,
    NavbarComponent,
    RSidebarComponent,
    FooterComponent,
  ],
  exports: [
    MainComponent,
    SidebarComponent,
    NavbarComponent,
    RSidebarComponent,
    FooterComponent,
  ],
})
export class LayoutModule {}
