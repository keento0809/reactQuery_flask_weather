import { SetStateAction, Dispatch } from "react";
import { LatLon } from "../types/Location";

// Get location data from openWeatherMap API
export const getCurrLocationWeather = async (latLon: LatLon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latLon["lat"]}&lon=${
      latLon["lon"]
    }&appid=${import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY}&units=metric`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const res = await response.json();
  return res;
};

// Get weekly (next 5 days) weather data from openWeatherMap API
export const getWeeklyLocationWeather = async (latLon: LatLon) => {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/forecast?lat=${
      latLon["lat"]
    }&lon=${latLon["lon"]}&appid=${
      import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY
    }&units=metric`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const res = await response.json();
  return res;
};

//
export const getLatLog = async (
  location: string,
  setLatLon: Dispatch<React.SetStateAction<LatLon>>
) => {
  const response = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=2&appid=${
      import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY
    }`
  );
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  const res = await response.json();
  const lat: number = res[0]?.lat;
  const lon: number = res[0]?.lon;
  setLatLon({ lat, lon });
  return res;
};
