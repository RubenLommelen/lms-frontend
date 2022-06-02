import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {LayoutModule} from "./layout/layout.module";
import {CodelabOverviewComponent} from './codelab-overview/codelab-overview.component';
import {LoginComponent} from './login/login.component';
import {EmailValidator, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {HttpinterceptorInterceptor} from "./services/httpinterceptor.interceptor";
import { HomePageComponent } from './home-page/home-page.component';
import { ProfileComponent } from './profile/profile.component';
import { ProgressionOverviewComponent } from './progression-overview/progression-overview.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    CodelabOverviewComponent,
    LoginComponent,
    HomePageComponent,
    ProfileComponent,
    ProgressionOverviewComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    LayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HttpinterceptorInterceptor, multi: true
    }

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
