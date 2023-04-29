export interface GeonameCity {
  adminCode1: number;
  lng: number;
  geonameId: number;
  toponymName: String;
  countryId: number;
  fcl: String;
  population: number;
  countryCode: String;
  name: String;
  adminCodes1: {
    ISO3166_2: String;
  };
}

export interface GeonameCities {
  totalResultsCount: number;
  geonames: GeonameCity[];
}
