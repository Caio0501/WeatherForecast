import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { InputSearchComponent } from '../shared/input-search/input-search.component';
import { RouterModule } from '@angular/router';
import { ModelsRouter } from './models.routes';
import { WeatherComponent } from './weather/weather.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    InputSearchComponent,
    WeatherComponent
  ],
  
  imports: [
    CommonModule,
    RouterModule.forChild(ModelsRouter)
  ],
  providers: [

  ]
})
export class ModelsModule { }
