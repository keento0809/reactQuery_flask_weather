export type BasicWeatherInfo = {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: number;
  id: number;
  main: any;
  // {temp: 2.62, feels_like: 2.62, temp_min: 1.76, temp_max: 4.84, pressure: 1003, …}
  name: string;
  sys: any;
  // {type: 2, id: 2011597, country: 'CA', sunrise: 1677423676, sunset: 1677462589}
  timezone: number;
  visibility: number;
  weather: any;
  // [{…}]
  wind: { speed: number; deg: number };
};
