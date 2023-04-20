import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const COUNTRY_MAP_URL = 'https://raw.githubusercontent.com/djaiss/mapsicon/master/all/';

const filteredCountries = (data) => data
  .filter((country) => country.independent)
  .map((country) => ({
    path: `/${country.name.common}`,
    name: country.name.common,
    official: country.name.official,
    id: country.cca3,
    capital: country.capital,
    region: country.region,
    subregion: country.subregion,
    continent: country.continents[0],
    population: country.population,
    lat: country.latlng[0],
    lng: country.latlng[1],
    area: country.area,
    flagSymbol: country.flag,
    flag: country.flags.png,
    map: `${COUNTRY_MAP_URL}${country.cca2.toLowerCase()}/vector.svg`,
    currencies: Object.entries(country.currencies).map(
      ([code, { name, symbol }]) => ({
        code,
        name,
        symbol,
      }),
    ),
    languages: Object.entries(country.languages).map(([code, name]) => ({
      code,
      name,
    })),
  }))
  .sort((a, b) => a.name.localeCompare(b.name));

export const getCountries = createAsyncThunk(
  'countries/getCountries',
  async ({ region, name }) => {
    let url;
    if (region === 'All') {
      url = 'https://restcountries.com/v3.1/all';
    } else {
      url = `https://restcountries.com/v3.1/region/${region}`;
    }

    const response = await axios.get(url);
    const countries = response.data;

    if (name) {
      return countries.filter((country) => country.name.common === name);
    }

    return filteredCountries(countries);
  },
);

const initialState = {
  countries: [],
  status: 'idle',
  error: null,
};

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCountries.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getCountries.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.countries = action.payload;
      })
      .addCase(getCountries.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default countriesSlice.reducer;
