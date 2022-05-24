import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {LoginSuccesComponent} from "./login-succes/login-succes.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {CodelabOverviewComponent} from "./codelab-overview/codelab-overview.component";

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'loginsucces', component:LoginSuccesComponent},
  {path:'', component:HomePageComponent},
  {path:'students', component: CodelabOverviewComponent}
];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
