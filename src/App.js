import { useEffect, useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import { selectRegion, setRegion } from "./region/regionSlice";
import { selectCountries, setCountries } from "./countriesSlice/countriesSlice";

function App() {
  const dispatch = useDispatch();
  const region = useSelector(selectRegion);
  const countries = useSelector(selectCountries);

  useEffect(() => {
    async function display_countries() {
      const res = await axios.get(
        `https://restcountries.eu/rest/v2/region/${region}`
      );
      console.log(res.data);
      dispatch(setCountries({ countries: res.data }));
    }
    display_countries();
  }, [region]);

  const select_region = (e) => {
    dispatch(setRegion({ region: `${e.target.value}` }));
  };

  return (
    <div className="App">
      <header>
        <h1>Countries By Region</h1>
      </header>

      <div className="region-names">
        <select id="region" onChange={(e) => select_region(e)}>
          <option value="africa">Africa</option>
          <option value="asia">Asia</option>
          <option value="europe">Europe</option>
          <option value="americas">Americas</option>
        </select>
      </div>

      <div className="country-names">
        <select>
          {countries &&
            countries.map((data, i) => {
              return (
                <option key={i} value={data.name}>
                  {data.name}
                </option>
              );
            })}
        </select>
      </div>
    </div>
  );
}

export default App;
