import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CodelabOverviewComponent} from "./codelab-overview/codelab-overview.component";

const routes: Routes = [
  {path:'', component: CodelabOverviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
