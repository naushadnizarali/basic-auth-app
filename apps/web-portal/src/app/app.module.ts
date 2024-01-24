import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FrontendUtilityCommonModule } from '@frontend/utility/common';
import { UiModule } from '@frontend/utility/ui';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    UiModule,
    FrontendUtilityCommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
