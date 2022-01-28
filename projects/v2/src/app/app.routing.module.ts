import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewRouter } from './view/view.routes';


const AppRouter: Routes = [
  {
    path: '',
		children: [
			{
				path: '',
				redirectTo: '/home',
				pathMatch: 'full',
			},
			{
				path: 'home',
				loadChildren: () => import('./view/view.module').then((m) => m.ViewModule),
			},
		]
	}
];

@NgModule({
  imports: [RouterModule.forRoot(AppRouter)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
