import React from "react";
import { connect } from "react-redux";
import loadCountry from "./actions";
import "./App.css";
import PokeDetails from "./components/PokeDetails";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.allPoke = ["charmeleon", "charizard", "squirtle", "wartortle"];
  }

  componentDidMount() {
    this.props.changeRegion();
  }

  render() {
    console.log(this.props);
    const { state, changeRegion } = this.props;
    return (
      <div className="App">
        {state !== "error" ? (
          <>
            <header>
              <h1>Know Your Pokemon</h1>
            </header>
            <div className="region-names">
              <h2>Select Pokemon :</h2>
              <select
                id="region"
                onChange={(e) => changeRegion(e.target.value)}
              >
                {this.allPoke.map((reg, i) => {
                  return (
                    <option key={i} value={reg}>
                      {reg}
                    </option>
                  );
                })}
              </select>
            </div>

            <div className="country-names">
              <h2> Select Abilites : </h2>
              <select>
                {state &&
                  state.abilities.map((data, i) => {
                    return (
                      <option key={i} value={data.ability.name}>
                        {data.ability.name}
                      </option>
                    );
                  })}
              </select>
            </div>
            <div>
              <PokeDetails state={state} />
            </div>
          </>
        ) : (
          <h1>error 404 :: page not found </h1>
        )}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    state: state.data,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    changeRegion: (value) => {
      dispatch(loadCountry(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
