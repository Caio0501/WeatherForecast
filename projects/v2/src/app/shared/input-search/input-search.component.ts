import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

const INPUT_FIELD_VALUE_ACCESSOR: any = {
	provide: NG_VALUE_ACCESSOR,
	useExisting: forwardRef(() => InputSearchComponent),
	multi: true,
}
@Component({
	selector: 'app-input-search',
	templateUrl: './input-search.component.html',
	styleUrls: ['./input-search.component.scss'],
	providers: [INPUT_FIELD_VALUE_ACCESSOR]
})
export class InputSearchComponent implements ControlValueAccessor {

	@Input() placeholder: string = 'Search';
	@Input() data: [];
	@Input() isReadOnly = false;

	private innerValue: any;
	get value() {
		return this.innerValue;
	}
	set value(v: any) {
		if (v != this.innerValue) {
			this.innerValue = v;
			this.onChangeCb(v)
		}
	}

	onChangeCb: (_: any) => void = () => { };
	onTouchedCb: (_: any) => void = () => { };

	writeValue(v: any): void {
		if (v != this.innerValue) {
			this.value = v;
		}
	}
	registerOnChange(fn: any): void {
		this.onChangeCb = fn
	}
	registerOnTouched(fn: any): void {
		this.onTouchedCb = fn;
	}
	setDisabledState?(isDisabled: boolean): void {
		this.isReadOnly = isDisabled;
	}

}
