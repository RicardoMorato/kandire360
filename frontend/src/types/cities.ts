export interface GeonameCity {
  adminCode1: number;
  lng: number;
  geonameId: number;
  toponymName: string;
  countryId: number;
  fcl: string;
  population: number;
  countryCode: string;
  name: string;
  adminCodes1: {
    ISO3166_2: string;
  };
}

export interface AntdSelectOptions {
  value: string;
  label: string;
}

export interface GeonameCities {
  totalResultsCount: number;
  geonames: GeonameCity[];
}
