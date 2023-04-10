import Dashboard from "../components/dashboards/Dashboard";
import { useState } from "react";
import {
  getCurrLocationWeather,
  getWeeklyLocationWeather,
  getLatLog,
} from "../queries/Queries";
import { useCycle } from "framer-motion";
import { useIsFetching, useQueries } from "react-query";
import styles from "./styles/home.module.scss";
import Header from "../components/header/Header";
import Modal from "../components/modal/Modal";
import { LatLon, LocationData } from "../types/Location";
import {
  CURRENT_LOCATION_WEATHER_INDEX,
  WEEKLY_WEATHER_INDEX,
  LATLOG_INDEX,
} from "../constants/queryKey";
import { WeeklyWeatherInfo } from "../types/weather";
import NewWeeklyDashboard from "../components/dashboards/NewWeekDashboard";

const Home = () => {
  const [location, setLocation] = useState("Vancouver");
  const [latLon, setLatLon] = useState<LatLon>({
    lat: 49.2608724,
    lon: -123.113952,
  });
  const [isOpen, toggleOpen] = useCycle(false, true);

  const isFetching = useIsFetching();

  // declare useQueries for fetching both current location weather and weekly weather
  const weatherQuery = useQueries([
    {
      queryKey: [["currLocationW", latLon], CURRENT_LOCATION_WEATHER_INDEX],
      queryFn: () => getCurrLocationWeather(latLon),
    },
    {
      queryKey: [["weeklyW", latLon], WEEKLY_WEATHER_INDEX],
      queryFn: () => getWeeklyLocationWeather(latLon),
    },
    {
      queryKey: [["location", location], LATLOG_INDEX],
      queryFn: () => getLatLog(location, setLatLon),
    },
  ]);

  //
  const currLocationWeatherData =
    weatherQuery[CURRENT_LOCATION_WEATHER_INDEX].data;

  //
  const weeklyWeatherData = weatherQuery[WEEKLY_WEATHER_INDEX].data;

  //
  const sortedWeeklyWeatherData = weeklyWeatherData?.list.filter(
    (d: WeeklyWeatherInfo, index: number) => (index + 1) % 8 === 0
  );

  //
  const handleChangeLocation = (value: LocationData) => {
    setLocation(value.label.split(",")[0]);
    toggleOpen();
  };

  const isLoadingData =
    isFetching === 0 && !weatherQuery[WEEKLY_WEATHER_INDEX].isLoading;

  return (
    <div className={styles["home_wrapper"]}>
      {isFetching !== 0 && <Modal />}
      <Header
        onChange={handleChangeLocation}
        isOpen={isOpen}
        toggleOpen={toggleOpen}
      />
      <div className={styles["home_container"]}>
        {isLoadingData && <Dashboard currData={currLocationWeatherData} />}
        {isLoadingData && (
          <NewWeeklyDashboard
            latLon={latLon}
            weeklyWeatherData={sortedWeeklyWeatherData}
          />
        )}
      </div>
    </div>
  );
};

export default Home;
