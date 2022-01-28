import { ChangeDetectorRef, Component, Injector, Input, OnDestroy, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subject } from 'rxjs';

@Component({
	selector: 'app-input-search',
	templateUrl: './input-search.component.html',
	styleUrls: ['./input-search.component.scss'],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			multi: true,
			useExisting: InputSearchComponent
		}
	]
})
export class InputSearchComponent implements ControlValueAccessor, OnInit, OnDestroy {

	@Input() placeholder: string = 'Search';
	@Input() data: [];


	public formControl = new FormControl(undefined);
	public onChange!: (_value: any) => void;
	public onTouched!: () => void;
	public onDestroy = new Subject<void>()

	constructor() {

	}
	ngOnInit(): void {

	}

	ngOnDestroy(): void {

	}
	
	writeValue(obj: any): void {
		throw new Error('Method not implemented.');
	}
	registerOnChange(fn: any): void {
		throw new Error('Method not implemented.');
	}
	registerOnTouched(fn: any): void {
		throw new Error('Method not implemented.');
	}
	setDisabledState?(isDisabled: boolean): void {
		throw new Error('Method not implemented.');
	}

}
