import PropTypes from "prop-types";
import "./Dashboard.css";

function Dashboard(props) {
  const { map, name, population } = props;

  return (
    <section className="Dashboard">
      <img src={map} alt={name} className="dashboard-map" />
      <article className="map-container">
        <h2 className="dash-title">{name}</h2>
        <span className="pop">{population}</span>
      </article>
    </section>
  );
}

Dashboard.propTypes = {
  name: PropTypes.string,
  population: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  map: PropTypes.string,
};

Dashboard.defaultProps = {
  name: "",
  population: "",
  map: "",
};

export default Dashboard;
