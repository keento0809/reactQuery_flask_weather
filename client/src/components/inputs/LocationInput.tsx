import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import { LocationOnChange } from "../../types/Location";
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
          styles: {
            control: (provided: any) => ({
              ...provided,
              background: "#2d3542",
              focus: "none",
            }),
            input: (provided: any) => ({
              ...provided,
              fontSize: "16px",
            }),
            indicators: (provided: any) => ({
              ...provided,
              color: "red",
              visibility: "hidden",
            }),
          },
        }}
      />
    </div>
  );
};

export default LocationInput;
