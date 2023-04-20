import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useHistory } from 'react-router-dom';
import { getCountries } from '../redux/continents/countries/countriesSlice';
import Dashboard from '../components/Dashboard';
import Wrapper from '../components/wrapper';

const Countries = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { countries, status } = useSelector((state) => state.countries);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const continent = JSON.parse(searchParams.get('continent') || '{}');
  const {
    region, map, population, name, noOfCountries,
  } = continent;
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getCountries({ region }));
    }
  }, [status, region, dispatch]);

  const handleCountryClick = (country) => {
    const countryString = JSON.stringify(country);
    history.push(`/country?country=${countryString}`);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCountries = useMemo(
    () => countries.filter((country) => country.name.toLowerCase()
      .includes(searchTerm.toLowerCase())),
    [countries, searchTerm],
  );

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Dashboard map={map} name={name} population={population} />
      <section className="data-section">
        <article className="search-wrapper">
          <h3 className="section-title">
            {noOfCountries}
            <span> Countries</span>
          </h3>
          <form>
            <input
              type="text"
              placeholder="Search country name"
              className="search-input"
              onChange={handleSearch}
            />
          </form>
        </article>
        <nav className="navbar">
          {filteredCountries.map((country) => (
            <a
              className="nav-item"
              key={country.id}
              href={country.path}
              onClick={(e) => {
                e.preventDefault();
                handleCountryClick(country);
              }}
            >
              <Wrapper wrapper={country} />
            </a>
          ))}
        </nav>
      </section>
    </>
  );
};

export default Countries;
