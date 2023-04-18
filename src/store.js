import { configureStore } from "@reduxjs/toolkit";
import continentsSlice from "./redux/continents/continentsSlice";
import countriesSlice from "./redux/continents/countries/countriesSlice";

const store = configureStore({
  reducer: {
    continents: continentsSlice,
    countries: countriesSlice,
  },
});

export default store;
