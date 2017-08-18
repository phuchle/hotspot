import React from 'react';
import renderer from 'react-test-renderer';
import MapContainer from '../MapContainer';

describe('MapContainer', () => {
  test('renders without crashing', () => {
    const component = renderer.create(
      <MapContainer />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
