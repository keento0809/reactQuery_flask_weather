import styles from "./styles.module.scss";
import { getWeatherIcon } from "../../helper/getWeatherIcon";
import { BasicWeatherInfo } from "../../types/weather";

type Props = {
  currData: BasicWeatherInfo;
};

const Dashboard = ({ currData }: Props) => {
  return (
    <div className={styles["dashboard_container"]}>
      <div className={styles["dashboard_contents"]}>
        <span className={styles["dashboard_icon"]}>
          {getWeatherIcon(currData?.weather[0].main)}
        </span>
        <h3 className={styles["dashboard_temp"]}>
          {Math.floor(currData?.main.temp_min)}°
        </h3>
        <div className={styles["dashboard_locationInfo"]}>
          <h3 className={styles["dashboard_location"]}>{currData?.name}</h3>
          <p className={styles["dashboard_weather"]}>
            {currData?.weather[0].main}
          </p>
          <p className={styles["dashboard_wind"]}>{currData?.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
