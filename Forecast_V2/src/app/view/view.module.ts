import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InputSearchComponent } from '../shared/input-search/input-search.component';
import { HomeComponent } from './home/home.component';
import { ViewRouter } from './view.routes';
import { WeatherComponent } from './weather/weather.component';



@NgModule({
  declarations: [
    HomeComponent,
    InputSearchComponent,
    WeatherComponent
  ],
  
  imports: [
    CommonModule,
    RouterModule.forChild(ViewRouter)
  ],
  providers: [

  ]
})
export class ViewModule { }
