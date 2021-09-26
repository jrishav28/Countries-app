import React, { Component } from "react";

export default class PokeDetails extends Component {
  constructor(props) {
    super(props);
    this.poke = this.props.state;
  }
  render() {
    return (
      <div className="details">
        <div className="inner">
          <p>DETAILS</p>
          <p>{`ID: ${this.poke?.id}`}</p>
          <p>{`Name: ${this.poke?.name}`}</p>
          <p>{`Height: ${this.poke?.height}`}</p>
          <p>{`Weight: ${this.poke?.weight}`}</p>
          <img
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.poke?.id}.png`}
            alt="img"
          />
        </div>
      </div>
    );
  }
}
