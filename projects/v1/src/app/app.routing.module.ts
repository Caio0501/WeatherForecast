import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './view/home-page/home-page.component';
import { MoreInfoComponent } from './view/more-info/more-info.component';

const AppRouter: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'moreinfo', component: MoreInfoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(AppRouter)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
