import React, { Component } from "react";
import Dropdown from "./Dropdown";
export class SelectComp extends Component {
  constructor(props) {
    super(props);
    this.allPoke = ["charmeleon", "charizard", "squirtle", "wartortle"];
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ ability: e });
  }
  render() {
    return (
      <div>
        <div className="poke-names">
          <h2>Select Pokemon :</h2>
          <Dropdown data={this.allPoke} change={this.props.changePoke} />
        </div>
        <div className="poke-abilities">
          <h2> Select Abilities : </h2>

          {this.props.state !== "error" && (
            <Dropdown
              data={this.props.state?.abilities.map((e, i) => e.ability.name)}
              change={this.handleChange}
            />
          )}
        </div>
      </div>
    );
  }
}
