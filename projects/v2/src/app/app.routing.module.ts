import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewRouter } from './view/view.routes';


const AppRouter: Routes = [
  {
    path: '',
    children: [...ViewRouter]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(AppRouter)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
