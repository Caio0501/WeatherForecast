import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { InputSearchComponent } from '../shared/input-search/input-search.component';
import { InputSearchModule } from '../shared/input-search/input-search.module';
import { WeatherMapService } from '../utils/services/weathermap.service';
import { HomeComponent } from './home/home.component';
import { ViewRouter } from './view.routes';



@NgModule({
  declarations: [
    HomeComponent,
  ],
  imports: [
    CommonModule,
		InputSearchModule,
    RouterModule.forChild(ViewRouter)
  ],
  providers: [
		WeatherMapService
  ]
})
export class ViewModule { }
