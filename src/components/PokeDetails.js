import React, { Component } from "react";
import { connect } from "react-redux";

class PokeDetails extends Component {
  render() {
    return (
      <div>
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
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state: state.data,
  };
};
export default connect(mapStateToProps)(PokeDetails);
