import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiModule } from '@frontend/utility/ui';
import { FooterComponent } from './admin/footer/footer.component';
import { HeaderComponent } from './admin/header/header.component';
import { MainComponent } from './admin/main/main.component';
import { NavbarComponent } from './admin/navbar/navbar.component';
import { SidebarComponent } from './admin/sidebar/sidebar.component';

@NgModule({
  imports: [CommonModule, RouterModule, UiModule],
  declarations: [
    MainComponent,
    SidebarComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    MainComponent,
    SidebarComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class LayoutModule {}
