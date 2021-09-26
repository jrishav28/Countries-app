import React, { Component } from "react";
import { connect } from "react-redux";

class PokeDetails extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log(this.props);
    return (
      <div className="details">
        <div className="inner">
          <p>DETAILS</p>
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
    );
  }
}
const mapStateToProps = (state) => {
  return {
    state: state.data,
  };
};
export default connect(mapStateToProps)(PokeDetails);
