import Dashboard from "../components/dashboard/Dashboard";
import LocationInput from "../components/inputs/LocationInput";
import { useState } from "react";
import { getCurrLocationWeather } from "../queries/Queries";
import { useQuery } from "react-query";
import WeeklyDashboard from "../components/dashboard/weeklyDashboard";
import styles from "./home.module.scss";
import Header from "../components/header/Header";

const Home = () => {
  const [location, setLocation] = useState("Vancouver");
  const [latLon, setLatLon] = useState({ lat: 49.2608724, lon: -123.113952 });

  // Somehow replacing this function ended up crashing codes
  const getLatLog = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=2&appid=806b5a9230bb5d5e4370ac1b77652918`
      // `https://api.openweathermap.org/geo/1.0/direct?q=${location}&limit=2&appid=${
      //   import.meta.env.VITE_OPEN_WEATHER_MAP_API_KEY
      // }`
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
      <Header onChange={handleChangeLocation} />
      <div className={styles["home_container"]}>
        {isLoading && <div>Loading......</div>}
        {error && <div>An error has occurred,,,</div>}
        {currData && <Dashboard currData={currData} />}
        {currData && <WeeklyDashboard latLon={latLon} />}
      </div>
    </div>
  );
};

export default Home;
