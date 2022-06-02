import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LayoutModule} from "./layout/layout.module";
import {CodelabOverviewComponent} from './codelab-overview/codelab-overview.component';
import {LoginComponent} from './login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpinterceptorInterceptor} from "./services/login/httpinterceptor.interceptor";
import {HomePageComponent} from './home-page/home-page.component';
import {ProgressionOverviewComponent} from './progression-overview/progression-overview.component';
import {ProfileComponent} from "./profile/profile.component";


@NgModule({
  declarations: [
    AppComponent,
    CodelabOverviewComponent,
    LoginComponent,
    HomePageComponent,
    ProgressionOverviewComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    LayoutModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpinterceptorInterceptor, multi: true
    }

  ],
  exports: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
