interface BasicCoordObj {
  lon: number;
  lat: number;
}

interface BasicMainObj {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
}

interface BasicSysObj {
  type: number;
  id: number;
  country: string;
  sunrise: number;
  sunset: number;
}

interface BasicWindObj {
  speed: number;
  deg: number;
}

interface WeatherObj {
  id: number;
  description: string;
  main: string;
  icon: string;
}

export interface BasicWeatherInfo {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: BasicCoordObj;
  dt: number;
  id: number;
  main: BasicMainObj;
  name: string;
  sys: BasicSysObj;
  timezone: number;
  visibility: number;
  weather: WeatherObj[];
  wind: BasicWindObj;
}

interface WeekelyMainObj {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_kf: number;
  temp_max: number;
  temp_min: number;
}

interface WeeklyWindObj {
  deg: number;
  gust: number;
  speed: number;
}

export interface WeeklyWeatherInfo {
  clouds: { all: number };
  dt: number;
  dt_txt: string;
  main: WeekelyMainObj;
  pop: number;
  sys: { pod: string };
  visibility: number;
  weather: WeatherObj[];
  wind: WeeklyWindObj;
}
