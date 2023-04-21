import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Dashboard from '../components/Dashboard.js';
import Wrapper from '../components/wrapper.js';
import { getContinents } from '../redux/continents/continentsSlice.js';

const Continents = () => {
  const dispatch = useDispatch();
  const { continents, status } = useSelector((state) => state.continents);
  const history = useHistory();

  useEffect(() => {
    if (status === 'idle') {
      // Only fetch the data if it hasn't been fetched yet
      dispatch(getContinents());
    }
  }, [dispatch, status]);

  if (status === 'loading') return <div>...loading</div>;

  const totalPopulation = continents.reduce(
    (accumulator, object) => accumulator + object.population,
    0,
  );

  const handleContinentClick = (continent) => {
    const continentString = JSON.stringify(continent);
    history.push(`/continent?continent${continentString}`);
  };

  return (
    <>
      <Dashboard
        map="https://svgsilh.com/svg/306338.svg"
        name="World"
        population={totalPopulation}
      />
      <section className="data-section">
        <h3 className="section-title">Continents</h3>
        <nav className="navbar">
          {/* Iterate over continents array and display each continent using Wrapper component */}
          {continents.map((continent) => (
            <a
              className="nav-item"
              key={continent.id}
              href={continent.path}
              onClick={(e) => {
                e.preventDefault();
                handleContinentClick(continent);
              }}
            >
              <Wrapper wrapper={continent} />
            </a>
          ))}
        </nav>
      </section>
    </>
  );
};

export default Continents;
