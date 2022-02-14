import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home.routing.module';
import { InputSearchModule } from '../../shared/input-search/input-search.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		CommonModule,
		InputSearchModule,
		HomeRoutingModule,

		FormsModule,
		ReactiveFormsModule,
	]
})
export class HomeModule { }
