import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, skipWhile, Subject, takeUntil } from 'rxjs';

@Component({
	selector: 'app-home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	public data = []
	public cityName: FormControl;
	private _onDestroy = new Subject<void>();

	constructor(private fb: FormBuilder) { }

	ngOnInit(): void {
		this.cityName = new FormControl(undefined);
		this.search()
	}

	search() {
		this.cityName.valueChanges
			.pipe(
				takeUntil(this._onDestroy),
				skipWhile(res => !res),
				debounceTime(500),
				distinctUntilChanged())
			.subscribe((v) => {
				console.log(v)
			})
	}

}
