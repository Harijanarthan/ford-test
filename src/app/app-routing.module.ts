import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FordLandingPageComponent } from './ford-landing-page/ford-landing-page.component';
import { JsonPageComponent } from './json-page/json-page.component';


const routes: Routes = [
  {
    path:'',
    component:FordLandingPageComponent
  },
  {
    path:'json',
    component:JsonPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
