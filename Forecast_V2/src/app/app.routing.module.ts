import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModelsRouter } from './models/models.routes';

const AppRouter: Routes = [
  {
    path: '',
    children: [...ModelsRouter]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(AppRouter)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
