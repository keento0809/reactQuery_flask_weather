import styles from "./styles.module.scss";

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
        <h4>{currData?.weather[0].main}</h4>
        <p>{currData?.wind.speed} m/s</p>
      </div>
    </div>
  );
};

export default Dashboard;
