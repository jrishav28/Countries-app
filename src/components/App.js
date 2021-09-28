import React from "react";
import "./css/App.css";
import PokeDetails from "./PokeDetails";
import SelectComp from "../containers/SelectCompContainer";

export class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.changePoke();
  }

  render() {
    const { state } = this.props;
    return (
      <div className="App">
        <header>
          <h1>Know Your Pokemon</h1>
        </header>

        <SelectComp state={state} />

        {state !== "error" ? (
          <PokeDetails />
        ) : (
          <>
            <h3>* sorry, an error is detected </h3>
          </>
        )}
      </div>
    );
  }
}
