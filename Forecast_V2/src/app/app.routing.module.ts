import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const AppRouter: Routes = [
  { path: ''  },
];

@NgModule({
  imports: [RouterModule.forRoot(AppRouter)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
