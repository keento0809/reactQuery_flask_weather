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
              focus: "none",
            }),
            input: (provided: any) => ({
              ...provided,
              backgroundColor: "#e6effa",
              fontSize: "16px",
            }),
          },
        }}
      />
    </div>
  );
};

export default LocationInput;
