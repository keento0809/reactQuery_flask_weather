import styles from "./styles.module.scss";
import { getWeatherIcon } from "../../helper/getWeatherIcon";

type Props = {
  currData: any;
  weeklyData?: any;
};

const Dashboard = ({ currData }: Props) => {
  return (
    <div className={styles["dashboard_container"]}>
      <div className={styles["dashboard_contents"]}>
        <h3>{currData?.name}</h3>
        <p>{Math.floor(currData?.main.temp_min)}°</p>
        <span>{getWeatherIcon(currData?.weather[0].main)}</span>
        <p>{currData?.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default Dashboard;
