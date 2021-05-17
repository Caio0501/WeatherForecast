import { ListForecast } from "./listforecast";

export interface Forecast {
  cod: string;
  message: number;
  cnt: number;
  list: ListForecast[];
}
