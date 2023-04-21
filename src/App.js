import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header.js';
import Continents from './Pages/continents.js';
import Countries from './Pages/countries.js';
import CountryDetails from './Pages/countriesDetails.js';
import './App.css';

const App = () => (
  <Router>
    <Header />
    <main>
      <Switch>
        <Route path="/" exact>
          <Continents />
        </Route>
        <Route path="/continent">
          <Countries />
        </Route>
        <Route path="/country">
          <CountryDetails />
        </Route>
      </Switch>
    </main>
  </Router>
);

export default App;
