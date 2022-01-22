import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-city',
  templateUrl: './card-city.component.html',
  styleUrls: ['./card-city.component.css']
})
export class CardCityComponent implements OnInit {
  @Input() data;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getIcon(value): string {
    return `http://openweathermap.org/img/wn/${value}.png`;
  }

  getflag(value): string {
    return `http://openweathermap.org/images/flags/${value.toLowerCase()}.png`;
  }

  moreInfo(): void {
    this.router.paramsInheritanceStrategy = this.data.id;
    this.router.navigate(['/moreinfo']);
  }
}
