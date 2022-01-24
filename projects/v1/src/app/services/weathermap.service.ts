import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { apiKey } from 'keys/api-key';
import { Observable } from 'rxjs';
import { Forecast } from '../interface/gerForecast';
import { getFind } from '../interface/getFind';
import { GetWeather } from '../interface/getWeather';

@Injectable()
export class WatherMapService {
	public apikey: string;

	constructor(private http: HttpClient) {
		this.apikey = apiKey;
	}

	public getFind(value): Observable<getFind> {
		return this.http.get<getFind>(`https://api.openweathermap.org/data/2.5/find?q=${value}&appid=${this.apikey}&units=metric`);
	}

	public getWeather(value): Observable<GetWeather> {
		return this.http.get<GetWeather>(`https://api.openweathermap.org/data/2.5/weather?id=${value}&appid=${this.apikey}&units=metric`);
	}


	public getForecast(value): Observable<Forecast> {
		return this.http.get<Forecast>(`http://api.openweathermap.org/data/2.5/forecast?q=${value}&appid=${this.apikey}&units=metric`);
	}



}