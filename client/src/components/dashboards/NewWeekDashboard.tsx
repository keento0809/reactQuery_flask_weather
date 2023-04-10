import { useIsFetching } from "react-query";
import { getWeatherIcon } from "../../helper/getWeatherIcon";
import styles from "./styles.module.scss";
import { LatLon } from "../../types/Location";
import { WeeklyWeatherInfo } from "../../types/weather";

type Props = {
  latLon: LatLon;
  weeklyWeatherData: WeeklyWeatherInfo[];
};

const NewWeeklyDashboard = ({ latLon, weeklyWeatherData }: Props) => {
  const isFetching = useIsFetching();

  const weeklyWeatherDataRender = weeklyWeatherData?.map(
    (d: WeeklyWeatherInfo) => {
      const date = new Date(d.dt_txt.split(" ")[0]);
      const dateInfo = date
        .toString()
        .split(" ")
        .filter((d: string, i: number) => i < 3);

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
    }
  );
  return (
    <div className={styles["wDashboard"]}>
      <div className={styles["wDashboard_container"]}>
        {isFetching === 0 && weeklyWeatherDataRender}
      </div>
    </div>
  );
};

export default NewWeeklyDashboard;
