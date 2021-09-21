import { createSlice } from "@reduxjs/toolkit";
import React, { useState } from "react";
export const regionSlice = createSlice({
  name: "region",
  initialState: {
    region: "africa",
  },
  reducers: {
    setRegion: (state, action) => {
      state.region = action.payload.region;
    },
  },
});

export const { setRegion } = regionSlice.actions;

export const selectRegion = (state) => state.region.region;

export default regionSlice.reducer;
