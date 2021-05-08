import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routing.module';
import { WatherMapService } from './services/weathermap.service';
import { CardCityComponent } from './view/card-city/card-city.component';
import { HomePageComponent } from './view/home-page/home-page.component';
import { MoreInfoComponent } from './view/more-info/more-info.component';



@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    CardCityComponent,
    MoreInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    WatherMapService,
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
