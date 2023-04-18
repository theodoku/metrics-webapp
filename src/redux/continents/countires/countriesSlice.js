import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const COUNTRY_API_URL = "https://restcountries.com/v3.1/region/";

const initialState = {
  countries: [],
  status: "idle",
  error: null,
};

export const fetchCountries = createAsyncThunk("fetch/countries", async () => {
  const response = await axios.get(COUNTRY_API_URL);
  const countries = response.data
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
      map: `'https://raw.githubusercontent.com/djaiss/mapsicon/master/all/'${country.cca2.toLowerCase()}/vector.svg`,
      currencies: Object.entries(country.currencies).map(
        ([code, { name, symbol }]) => ({ code, name, symbol })
      ),
      languages: Object.entries(country.languages).map(([code, name]) => ({
        code,
        name,
      })),
    }))
    .sort((a, b) => a.name.localeCompare(b.name));
  return countries;
});

const countrySlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCountries.pending, (state) => ({
        ...state,
        status: "loading",
      }))
      .addCase(fetchCountries.fulfilled, (state, action) => ({
        ...state,
        status: "succeeded",
        country: action.payload,
      }))
      .addCase(fetchCountries.rejected, (state, action) => ({
        ...state,
        status: "failed",
        error: action.error.message,
      }));
  },
});

export default countrySlice.reducer;
