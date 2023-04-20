import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Continents from './Pages/continents';
import Countries from './Pages/countries';
import CountryDetails from './Pages/countriesDetails';
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
