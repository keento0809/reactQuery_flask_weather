import { ThreeDots } from "react-loader-spinner";

const ThreeDotsSpinner = () => {
  return (
    <ThreeDots
      height="80"
      width="80"
      radius="9"
      color="#2d3542"
      ariaLabel="three-dots-loading"
      visible={true}
    />
  );
};

export default ThreeDotsSpinner;
