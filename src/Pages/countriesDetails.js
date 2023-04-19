import { useLocation } from 'react-router-dom';
import { useMemo } from 'react';
import Dashboard from '../components/Dashboard';

const CountryDetails = () => {
  const location = useLocation();
  const searchParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  );
  const country = useMemo(
    () => JSON.parse(searchParams.get('country') || '{}'),
    [searchParams],
  );

  const {
    name,
    official,
    id,
    capital,
    subregion,
    region,
    population,
    lat,
    lng,
    area,
    flagSymbol,
    flag,
    map,
    currencies,
    languages,
  } = country;

  return (
    <>
      <Dashboard map={map} name={name} />
      <section className="data-section">
        <h3 className="article-heading">Country&apos;s Basic Info</h3>
        <article className="item-container">
          <div className="item">
            <span>Flag</span>
            <img className="flag" src={flag} alt="Country flag" />
          </div>
          <div className="item">
            <span>Flag Symbol</span>
            <span>{flagSymbol}</span>
          </div>
          <div className="item">
            <span>Official Name</span>
            <span>{official}</span>
          </div>
          <div className="item">
            <span>ID</span>
            <span>{id}</span>
          </div>
          <div className="item">
            <span>Capital</span>
            <span>{capital}</span>
          </div>
          <div className="item">
            <span>Currency</span>
            {currencies && currencies.length > 0 && (
              <span>
                {`${currencies[0].code}, ${currencies[0].name}, `}
                (
                <strong>{currencies[0].symbol}</strong>
                )
              </span>
            )}
          </div>
          <div className="item">
            <span>Languages</span>
            {languages && languages.length > 0 && (
              <span>
                {languages.map((language) => (
                  <span key={language.code}>
                    &nbsp;&nbsp;&lsquo;
                    {language.name}
                    &rsquo;
                  </span>
                ))}
              </span>
            )}
          </div>
          <div className="item">
            <span>Region</span>
            <span>{region}</span>
          </div>
          <div className="item">
            <span>Sub-Region</span>
            <span>{subregion}</span>
          </div>
          <div className="item">
            <span>Population</span>
            <span>{population}</span>
          </div>
          <div className="item">
            <span>Area</span>
            <span>
              {area}
              sq. km
            </span>
          </div>
          <div className="item">
            <span>Latitude</span>
            <span>{lat}</span>
          </div>
          <div className="item">
            <span>Longitude</span>
            <span>{lng}</span>
          </div>
        </article>
      </section>
    </>
  );
};

export default CountryDetails;
