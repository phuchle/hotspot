import { searchFoursquare, foursquare_id, foursquare_secret } from '../api';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { mockFoursquareResponse } from '../mocks/apiMock';

describe('API calls', () => {
  test('FourSquare search', () => {
    const mock = new MockAdapter(axios);
    const destination = 'Drinks';
    const location = 'San Francisco';
    const url = 'https://api.foursquare.com/v2/venues/explore';
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
    const mockResponse = mockFoursquareResponse;

    mock.onGet(url, { params: params })
      .reply(200, mockResponse);

    const testCall = searchFoursquare(destination, location);

    // let the promise resolve then test
    setTimeout(() => {
      expect(testCall).toEqual(mockResponse.data.response.groups[0].items);
    }, 0);
  });
});
