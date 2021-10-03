import React from "react";
import "../App.css";
import PokeDetails from "./PokeDetails";
import SelectComp from "../containers/SelectCompContainer";

export class App extends React.Component {
  componentDidMount() {
    this.props.changePoke();
  }

  render() {
    const { state } = this.props;
    return (
      <div className="App">
        <header>
          <h1 className="heading">Know Your Pokemon</h1>
        </header>

        <SelectComp state={state} />

        {state !== "error" ? (
          <PokeDetails />
        ) : (
          <h3>* sorry, an error occured </h3>
        )}
      </div>
    );
  }
}
