import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {CodelabOverviewComponent} from "./codelab-overview/codelab-overview.component";
import {ProfileComponent} from "./profile/profile.component";
import {ProgressionOverviewComponent} from "./progression-overview/progression-overview.component";
import {RegisterComponent} from "./register/register.component";

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'codelabs', component: CodelabOverviewComponent},
  {path:'profile/:username', component:ProfileComponent},
  {path:'', component:HomePageComponent},
  {path:'progression', component:ProgressionOverviewComponent},
  {path:'register', component:RegisterComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
