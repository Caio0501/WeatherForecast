import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/app/interface/list';
import { WatherMapService } from 'src/app/services/weathermap.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})

export class HomePageComponent implements OnInit {

  public searchCity: string = null;
  public searchResult: List = null;
  public loadErro: boolean = false;
  public message: string;

  constructor(private service: WatherMapService, private router: Router) { }

  ngOnInit(): void {
    const search = this.router.paramsInheritanceStrategy;
    if (search !== 'emptyOnly') {
      this.searchCity = search;
      this.search(search);
    }
  }

  search(event): void {
    this.searchResult = null;
    this.service.getFind(event).subscribe(result => {
      this.searchResult = result.list;
    }, error => {
      this.openAlert();
      setTimeout(() => {
        this.closeAlert();
      }, 5000);
    });
  }

  openAlert(): void {
    this.loadErro = true;
    this.message = 'No cities found with this name !'
  }

  closeAlert(): void {
    this.loadErro = false;
  }
}
