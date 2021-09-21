import { createSlice } from "@reduxjs/toolkit";
import React, { useState } from "react";
export const countriesSlice = createSlice({
  name: "countries",
  initialState: {
    countries: [],
  },
  reducers: {
    setCountries: (state, action) => {
      state.countries = action.payload.countries;
    },
  },
});

export const { setCountries } = countriesSlice.actions;

export const selectCountries = (state) => state.countries.countries;

export default countriesSlice.reducer;
