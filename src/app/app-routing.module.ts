import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Slide1Component } from './slides/slide-1/slide-1.component';
import { Slide2Component } from './slides/slide-2/slide-2.component';

const routes: Routes = [
  { path: 'slide1', component: Slide1Component, data: { state: '1'} },
  { path: 'slide2', component: Slide2Component, data: { state: '2' } },
  { path: '', redirectTo: '/slide1', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
