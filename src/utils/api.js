import axios from 'axios';

const google_api_key = 'AIzaSyBaGzrgs8zuIsJchNpcxnWy8nglZVpBviE';
const foursquare_id = 'QDJNZNVXLQ3FPAK04RFGUP0UNOIJK0GS5AIYATEON5CJWJ2W';
const foursquare_secret = 'UXY2ILKF0BPPYYPSUHJMK2JKGNU0YZXUVYNILDFAOBTBQMSD';

export const searchFoursquare = (destination, location) => {
  const searchURL = 'https://api.foursquare.com/v2/venues/explore';
  const params = {
    query: destination,
    near: location,
    limit: '20',
    intent: 'browse',
    client_id: foursquare_id,
    client_secret: foursquare_secret,
    v: '20170817',
    m: 'foursquare'
  };

  return axios.get(searchURL, {params: params})
    .then(response => {
      console.log(response.data.response.groups[0].items);
      return response.data.response.groups[0].items;
    })
    .catch(error => console.log(error));
};
