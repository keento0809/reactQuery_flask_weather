type LatLonObj = {
  lat: number;
  lon: number;
};

export const getCurrLocationWeather = async (latLon: LatLonObj) => {
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

export const getWeeklyLocationWeather = async (latLon: LatLonObj) => {
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
