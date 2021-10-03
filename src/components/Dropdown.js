import React, { Component } from "react";

export default class Dropdown extends Component {
  render() {
    return (
      <div>
        <select
          id="poke-names"
          onChange={(e) => this.props.change(e.target.value)}
        >
          {this.props?.data?.map((reg, i) => {
            return (
              <option key={i} value={reg}>
                {reg}
              </option>
            );
          })}
        </select>
      </div>
    );
  }
}
