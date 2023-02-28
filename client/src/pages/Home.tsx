import Dashboard from "../components/dashboard/Dashboard";
import LocationInput from "../components/inputs/LocationInput";
import { useState } from "react";
import { getCurrLocationWeather } from "../queries/Queries";
import { useQuery } from "react-query";
import WeeklyDashboard from "../components/dashboard/weeklyDashboard";
import styles from "./home.module.scss";

const Home = () => {
  const [location, setLocation] = useState("Vancouver");
  const [latLon, setLatLon] = useState({ lat: 44.34, lon: 10.99 });

  // Somehow replacing this function ended up crashing codes
  const getLatLog = async () => {
    const response = await fetch(
      `http://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=2&appid=${
        import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY
      }`
    );
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const res = await response.json();
    setLatLon({ lat: res[0]?.lat, lon: res[0]?.lon });
    return res;
  };

  // Implement Query to fetch data (Lat & Lon)
  useQuery(["latLom", location], getLatLog);

  // Implement Query to fetch data (Location)
  const {
    isLoading,
    error,
    data: currData,
  } = useQuery(["currLocationWeather", latLon], () =>
    getCurrLocationWeather(latLon)
  );

  const handleChangeLocation = (value: any) => {
    setLocation(value.label.split(",")[0]);
  };

  return (
    <div className={styles["home_wrapper"]}>
      <div>
        <LocationInput handleChange={handleChangeLocation} />
      </div>
      <div className={styles["home_container"]}>
        {isLoading && <div>Loading...</div>}
        {error && <div>An error has occurred,,,</div>}
        {currData && <Dashboard currData={currData} />}
        {currData && <WeeklyDashboard latLon={latLon} />}
      </div>
    </div>
  );
};

export default Home;
