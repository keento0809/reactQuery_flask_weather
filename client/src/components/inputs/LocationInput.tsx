import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import styles from "./styles.module.scss";

type Props = {
  onChange: (val: any) => void;
};

const LocationInput = ({ onChange }: Props) => {
  return (
    <div className={styles["locationInput"]}>
      <GooglePlacesAutocomplete
        apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}
        selectProps={{
          location,
          onChange,
        }}
      />
    </div>
  );
};

export default LocationInput;
