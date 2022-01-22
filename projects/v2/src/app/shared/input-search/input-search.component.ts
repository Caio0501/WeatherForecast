import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit, OnDestroy {

  public search = new FormControl();

  @Input() placeholder: string = 'Search';
  @Input() data: [];


  constructor() { }

  ngOnInit(): void {
    this.search.setValue(null);

  }

  ngOnDestroy(): void {
  }
}
