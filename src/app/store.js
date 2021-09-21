import { configureStore } from "@reduxjs/toolkit";
import regionReducer from "../region/regionSlice";
import countriesReducer from "../countriesSlice/countriesSlice";
export default configureStore({
  reducer: {
    region: regionReducer,
    countries: countriesReducer,
  },
});
