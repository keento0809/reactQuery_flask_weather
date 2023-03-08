import { ThreeDots } from "react-loader-spinner";

const ThreeDotsSpinner = () => {
  return (
    <div>
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color="#2d3542"
        ariaLabel="three-dots-loading"
        visible={true}
        wrapperStyle={{ justifyContent: "center" }}
      />
    </div>
  );
};

export default ThreeDotsSpinner;
