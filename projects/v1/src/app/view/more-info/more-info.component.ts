import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetWeather } from '../../interface/getWeather';
import { WatherMapService } from '../../services/weathermap.service';

@Component({
  selector: 'app-more-info',
  templateUrl: './more-info.component.html',
  styleUrls: ['./more-info.component.css']
})
export class MoreInfoComponent implements OnInit {

  public searchCity: string;
  public dataWeather: GetWeather;
  public timeNow = new Date();
  public daysList: any[];

  constructor(private router: Router, private service: WatherMapService) { }

  ngOnInit(): void {
    const id = this.router.paramsInheritanceStrategy;

    if (id !== 'emptyOnly') {
      this.loadWeather(id);
    }
  }

  search(searchCity): void {
    this.router.paramsInheritanceStrategy = searchCity;
    this.router.navigate(['']);
  }

  back(): void {
    this.router.paramsInheritanceStrategy = 'emptyOnly';
    this.router.navigate(['']);
  }

  loadWeather(id): void {
    this.service.getWeather(id).subscribe(async result => {
      this.dataWeather = result;
      await this.loadForecast(result.name);
    }, error => {

    });
  }

  getIcon(value): string {
    return `http://openweathermap.org/img/wn/${value}.png`;
  }

  loadForecast(data): void {
    this.service.getForecast(data).subscribe(result => {
      this.daysList = result.list;
    });
  }

  getForecastIcon(value): string {
    return  `http://openweathermap.org/img/wn/${value}.png`;
  }

}
