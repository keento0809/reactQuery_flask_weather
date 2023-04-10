import Dashboard from "../../components/dashboards/Dashboard";
import { useState, useMemo, useCallback } from "react";
import {
  getCurrLocationWeather,
  getWeeklyLocationWeather,
  getLatLog,
} from "../../queries/Queries";
import { useCycle } from "framer-motion";
import { useIsFetching, useQueries } from "react-query";
import styles from "./styles.module.scss";
import Header from "../../components/header/Header";
import Modal from "../../components/modal/Modal";
import { LatLon, LocationData } from "../../types/Location";
import {
  CURRENT_LOCATION_WEATHER_INDEX,
  WEEKLY_WEATHER_INDEX,
  LATLOG_INDEX,
} from "../../constants/queryKey";
import { WeeklyWeatherInfo } from "../../types/weather";
import NewWeeklyDashboard from "../../components/dashboards/NewWeekDashboard";

const HomeContainer = () => {
  const [location, setLocation] = useState("Vancouver");
  const [latLon, setLatLon] = useState<LatLon>({
    lat: 49.2608724,
    lon: -123.113952,
  });
  // check if the status of menus are opened or not
  const [isOpen, toggleOpen] = useCycle(false, true);

  // declare isFetching to oversee if data is being fetched or not
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

  // Current Location weather data
  const currLocationWeatherData =
    weatherQuery[CURRENT_LOCATION_WEATHER_INDEX].data;

  // Weekly weather data of current location
  const weeklyWeatherData = weatherQuery[WEEKLY_WEATHER_INDEX].data;

  // Sorted weekly weather data to pick up five of them (weather data for next 5 days)
  const sortedWeeklyWeatherData = weeklyWeatherData?.list.filter(
    (d: WeeklyWeatherInfo, index: number) => (index + 1) % 8 === 0
  );

  // Change location when putting a location name in LocationInput
  const handleChangeLocation = useCallback((value: LocationData) => {
    setLocation(value.label.split(",")[0]);
    toggleOpen();
  }, []);
  // const handleChangeLocation = (value: LocationData) => {
  //   setLocation(value.label.split(",")[0]);
  //   toggleOpen();
  // };

  // If this boolean is true, we should keep showing Modal
  const isLoadingData =
    isFetching === 0 && !weatherQuery[WEEKLY_WEATHER_INDEX].isLoading;

  return (
    <div className={styles["home_wrapper"]}>
      {isFetching !== 0 && !isLoadingData && <Modal />}
      <Header
        onChange={handleChangeLocation}
        isOpen={isOpen}
        toggleOpen={toggleOpen}
      />
      {/* {memorizedHeader} */}
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

export default HomeContainer;
