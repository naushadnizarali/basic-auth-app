import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { FrontendUtilityCommonModule } from '@frontend/utility/common';
import { LayoutModule } from '@frontend/utility/layout';
import { UiModule } from '@frontend/utility/ui';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    UiModule,
    LayoutModule,
    FrontendUtilityCommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
