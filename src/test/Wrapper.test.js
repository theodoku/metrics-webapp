import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import Wrapper from '../components/wrapper.js';

describe('Wrapper component', () => {
  const wrapper = {
    name: 'Test Wrapper',
    population: '1000000',
    map: 'test-map.png',
  };

  it('should match snapshot', () => {
    const { container } = render(<Wrapper wrapper={wrapper} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render the name and population', () => {
    const { getByText } = render(<Wrapper wrapper={wrapper} />);
    expect(getByText(wrapper.name)).toBeInTheDocument();
    expect(getByText(wrapper.population)).toBeInTheDocument();
  });

  it('should render the map image with the correct alt text', () => {
    const { getByAltText } = render(<Wrapper wrapper={wrapper} />);
    expect(getByAltText(wrapper.name)).toBeInTheDocument();
  });
});
