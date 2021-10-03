import React, { Component } from "react";
import { connect } from "react-redux";

export class PokeDetails extends Component {
  render() {
    return (
      <div>
        <div>
          <div className="details">
            <div className="inner">
              <p>
                ID: <span>{this.props.state?.id}</span>
              </p>
              <p>
                Name: <span>{this.props.state?.name}</span>
              </p>
              <p>
                Height: <span>{this.props.state?.height}</span>
              </p>
              <p>
                Weight: <span>{this.props.state?.weight}</span>
              </p>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${this.props.state?.id}.png`}
                alt="img"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export const mapStateToProps = (state) => {
  return {
    state: state.data,
  };
};
export default connect(mapStateToProps)(PokeDetails);
