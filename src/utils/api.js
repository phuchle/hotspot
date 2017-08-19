import axios from 'axios';

export const google_api_key = 'AIzaSyBaGzrgs8zuIsJchNpcxnWy8nglZVpBviE';
export const foursquare_id = 'QDJNZNVXLQ3FPAK04RFGUP0UNOIJK0GS5AIYATEON5CJWJ2W';
export const foursquare_secret = 'UXY2ILKF0BPPYYPSUHJMK2JKGNU0YZXUVYNILDFAOBTBQMSD';

// returns an obj in the form of { lat: ... , lng: ... }
export const geocodeLookup = address => {
  const url = 'https://maps.googleapis.com/maps/api/geocode/json';
  const params = {
    address: address,
    key: google_api_key
  };

  return axios.get(url, { params: params })
    .then(response => {
      return response.data.results[0].geometry.location;
    })
    .catch(error => console.log(error));
};

export const searchFoursquare = (destination, location) => {
  const searchURL = 'https://api.foursquare.com/v2/venues/explore';
  const params = {
    query: destination,
    near: location,
    limit: '50',
    intent: 'browse',
    client_id: foursquare_id,
    client_secret: foursquare_secret,
    v: '20170817',
    m: 'foursquare'
  };

  return axios.get(searchURL, { params: params })
    .then(response => {
      return response.data.response.groups[0].items;
    })
    .catch(error => console.log(error));
};

// calls both searches, then returns them as a single obj
export const findHotspots = (destination, location) => {
  return axios.all([geocodeLookup(location), searchFoursquare(destination, location)])
    .then(axios.spread((mapCenter, hotspots) => {
      return { mapCenter, hotspots };
    })
  );
};
