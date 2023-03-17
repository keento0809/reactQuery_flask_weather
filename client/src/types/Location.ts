import { Cycle } from "framer-motion";

export type LocationData = {
  label: string;
  value: {
    description: string;
    matched_substrings: { length: number; offset: number }[];
    place_id: string;
    reference: string;
    structured_formatting: {
      main_text: string;
      main_text_matched_substrings: { length: number; offset: number }[];
      secondary_text: string;
    };
    terms: { offset: number; value: string }[];
    types: string[];
  };
};

export type HandleChangeLocationFuncProps = {
  onChange: (val: LocationData) => void;
  isOpen: boolean;
  toggleOpen: Cycle;
};

export type LatLon = {
  lat: number;
  lon: number;
};
