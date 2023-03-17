import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import {
  PropsWithHandleChangeLocationFunc,
  LocationOnChange,
} from "../../types/Location";
import styles from "./styles.module.scss";

const LocationInput = ({ onChange }: LocationOnChange) => {
  return (
    <div className={styles["locationInput"]}>
      <GooglePlacesAutocomplete
        apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}
        selectProps={{
          location,
          onChange,
          placeholder: "Enter location...",
          autoFocus: false,
        }}
      />
    </div>
  );
};

export default LocationInput;
