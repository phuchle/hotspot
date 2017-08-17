import React from 'react';
import renderer from 'react-test-renderer';
import Navigation from '../Nav';
import { MemoryRouter } from 'react-router-dom';

describe ('Navigation bar', () => {
  test('renders without crashing', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Navigation />
      </MemoryRouter>
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
