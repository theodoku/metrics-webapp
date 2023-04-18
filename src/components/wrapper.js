import PropTypes from "prop-types";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

const Wrapper = ({ wrapper }) => {
  const { map = "", name = "", population = "" } = wrapper;

  return (
    <>
      <div className="right-arrow">
        <HiOutlineArrowCircleRight />
      </div>
      <section className="wrapper-conmtent">
        <img src={map} alt={name} className="wrapper-map" />
        <div className="wrapper-container">
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
  }),
  map: PropTypes.string,
};

Wrapper.defaultProps = {
  name: "",
  population: "",
  map: "",
};

export default Wrapper;
