import React, { Component } from "react";

class SelectComp extends Component {
  render() {
    return (
      <div>
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

export default connect(mapStateToProps, mapDispatchToProps)(SelectComp);
