import React from "react";
import { connect } from "react-redux";
import getPoke from "../actions";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.allPoke = ["charmeleon", "charizard", "squirtle", "wartortle"];
  }
  componentDidMount() {
    this.props.changePoke();
  }
  render() {
    const { state, changePoke } = this.props;
    return (
      <div className="App">
        <header>
          <h1>Know Your Pokemon</h1>
        </header>
        <div className="poke-names">
          <h2>Select Pokemon :</h2>
          <select id="poke-names" onChange={(e) => changePoke(e.target.value)}>
            {this.allPoke.map((reg, i) => {
              return (
                <option key={i} value={reg}>
                  {reg}
                </option>
              );
            })}
          </select>
        </div>

        <div className="poke-abilities">
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

        {state !== "error" ? (
          <>
            <div>
              <div className="details">
                <div className="inner">
                  <p>{`ID: ${this.props.state?.id}`}</p>
                  <p>{`Name: ${this.props.state?.name}`}</p>
                  <p>{`Height: ${this.props.state?.height}`}</p>
                  <p>{`Weight: ${this.props.state?.weight}`}</p>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.state?.id}.png`}
                    alt="img"
                  />
                </div>
              </div>
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
    changePoke: (value) => {
      dispatch(getPoke(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
