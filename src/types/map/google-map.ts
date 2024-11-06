interface LatLng {
  lat: number;
  lng: number;
}

// type for coordinates for google  map
interface GeoLocation {
  lng: string | number;
  lat: string | number;
}

//  address type with administrative
interface GeoLocationWithAdministrativeDetail extends GeoLocation {
  display_name?: string;
  city?: string;
  state?: string;
  road?: string;
  county?: string;
  country?: string;
  country_code?: string;
  postcode?: string;
}

interface LatLngWithAdministrativeDetail extends LatLng {
  display_name?: string;
  city?: string;
  state?: string;
  street_number?: string;
  state_short_name?: string;
  road?: string;
  county?: string;
  country?: string;
  country_code?: string;
  postcode?: string;
}

export type { GeoLocation, LatLngWithAdministrativeDetail, GeoLocationWithAdministrativeDetail };
