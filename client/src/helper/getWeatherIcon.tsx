import { BsSun } from "react-icons/bs";
import { BsCloudy } from "react-icons/bs";
import { IoUmbrellaOutline } from "react-icons/io5";

type Weather = "Clouds" | "Rain";

export const getWeatherIcon = (weather: String) => {
  switch (weather) {
    case "Clouds": {
      return <BsCloudy />;
    }
    case "Rain": {
      return <IoUmbrellaOutline />;
    }
    default: {
      return <BsSun />;
    }
  }
};
