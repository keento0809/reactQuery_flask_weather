import GooglePlacesAutocomplete from "react-google-places-autocomplete";

type Props = {
  handleChange: (val: any) => void;
};

const LocationInput = ({ handleChange }: Props) => {
  return (
    <div>
      <GooglePlacesAutocomplete
        apiKey={import.meta.env.VITE_GOOGLE_MAP_API_KEY}
        selectProps={{
          location,
          onChange: handleChange,
        }}
      />
    </div>
  );
};

export default LocationInput;
