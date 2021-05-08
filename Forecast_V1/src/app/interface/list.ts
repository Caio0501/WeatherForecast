import { Clouds } from './clouds';
import { Coord } from './coord';
import { Main } from './main';
import { Weather } from './weather';
import { Sys } from './sys';
import { Wind } from './wind';

export interface List {
  clouds: Clouds;
  coord: Coord;
  dt: number;
  id: number;
  main: Main;
  name: string;
  rain: string;
  snow: string;
  sys: Sys;
  weather: Weather;
  wind: Wind;
}
