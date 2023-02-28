type Props = {
  currData: any;
  weeklyData?: any;
};

const Dashboard = ({ currData }: Props) => {
  return (
    <div>
      <h3>{currData?.name}</h3>
      <p>{Math.floor(currData?.main.temp_min)}°</p>
      <h4>{currData?.weather[0].main}</h4>
      <p>{currData?.wind.speed} m/s</p>
    </div>
  );
};

export default Dashboard;
