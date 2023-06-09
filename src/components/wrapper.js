import PropTypes from 'prop-types';
import { HiOutlineArrowCircleRight } from 'react-icons/hi';

const Wrapper = ({ wrapper }) => {
  const { map = '', name = '', population = '' } = wrapper;

  return (
    <>
      <section className="wrapper-content">
        <img src={map} alt={name} className="wrapper-map" />
        <div className="wrapper-container">
          <HiOutlineArrowCircleRight className="right-arrow" />
          <h3 className="wrapper-title">{name}</h3>
          <span>{population}</span>
        </div>
      </section>
    </>
  );
};

Wrapper.propTypes = {
  wrapper: PropTypes.shape({
    name: PropTypes.string,
    population: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    map: PropTypes.string,
  }).isRequired,
};

export default Wrapper;
