import React from 'react';
import renderer from 'react-test-renderer';
import LocationInput from '../LocationInput';

describe ('LocationInput', () => {
  test('renders without crashing', () => {
    const component = renderer.create(
      <LocationInput handleSubmit={jest.fn()} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
