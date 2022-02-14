import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


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
				loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule),
			},
		]
	}
];

@NgModule({
	imports: [RouterModule.forRoot(AppRouter)],
	exports: [RouterModule]
})

export class AppRoutingModule { }
