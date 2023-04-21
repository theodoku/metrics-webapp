import React from 'react';
import { render } from '@testing-library/react';
import Dashboard from '../components/Dashboard.js';

describe('Dashboard component', () => {
  it('renders the component with props', () => {
    const props = {
      name: 'Test City',
      population: 100000,
      map: 'https://test.com/map.png',
    };

    const { container } = render(
      <Dashboard
        name={props.name}
        population={props.population}
        map={props.map}
      />,
    );

    expect(container.firstChild).toMatchSnapshot();
  });
});
