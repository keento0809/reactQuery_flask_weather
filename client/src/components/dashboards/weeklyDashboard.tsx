import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getWeatherIcon } from "../../helper/getWeatherIcon";
import { getWeeklyLocationWeather } from "../../queries/Queries";
import ThreeDotsSpinner from "../spinner/ThreeDotsSpinner";
import styles from "./styles.module.scss";

type Props = {
  latLon: any;
};

const WeeklyDashboard = ({ latLon }: Props) => {
  const { isLoading, error, data } = useQuery("weeklyWeather", () =>
    getWeeklyLocationWeather(latLon)
  );

  if (isLoading)
    return (
      <div className={styles["wDashboard_spinner"]}>
        <ThreeDotsSpinner />
      </div>
    );
  if (error) return <div>An error occurs...</div>;

  const dataRenderArr = data?.list.filter(
    (d: any, index: number) => (index + 1) % 8 === 0
  );
  console.log(dataRenderArr);

  const dataRender = dataRenderArr?.map((d: any) => {
    const date = new Date(d.dt_txt.split(" ")[0]);
    const dateInfo = date
      .toString()
      .split(" ")
      .filter((d: any, i: number) => i < 3);

    return (
      <div key={d.dt_txt} className={styles["wDashboard_dateRender"]}>
        <p className={styles["wDashboard_leftContent"]}>
          {dateInfo[0]}, {dateInfo[1]} {dateInfo[2]}
        </p>
        <p className={styles["wDashboard_centerContent"]}>
          {getWeatherIcon(d.weather[0].main)}
        </p>
        <div className={styles["wDashboard_rightContent"]}>
          <span>{Math.floor(d.main.temp_max)}°</span>&nbsp;/&nbsp;
          <span>{Math.floor(d.main.temp_min)}°</span>
        </div>
      </div>
    );
  });

  return (
    <div className={styles["wDashboard"]}>
      <div className={styles["wDashboard_container"]}>{dataRender}</div>
    </div>
  );
};

export default WeeklyDashboard;
