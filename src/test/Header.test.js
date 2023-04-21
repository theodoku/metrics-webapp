import React from 'react';
import renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header.js';

describe('Header component', () => {
  it('should match snapshot', () => {
    const component = renderer.create(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
