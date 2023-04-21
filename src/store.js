import { configureStore } from '@reduxjs/toolkit';
import continentsSlice from './redux/continents/continentsSlice.js';
import countriesSlice from './redux/continents/countries/countriesSlice.js';

const store = configureStore({
  reducer: {
    continents: continentsSlice,
    countries: countriesSlice,
  },
});

export default store;
