import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../Redux/actions";
import { resetArray } from "../Algorithms/Algorithms";
import "./styles.css";
export class SortingVisualizer extends Component {
  componentDidMount() {
    this.props.updateDataArray(resetArray(this.props.dataArraySize));
  }

  componentWillUnmount() {
    this.props.updateDataArray([]);
  }

  render() {
    return (
      <div className="sort-container">
        {this.props.isHorizontalDirection
          ? this.props.dataArray.map((value, index) => (
              <div
                className="horizontal-bar"
                key={index}
                style={{
                  width: value + "%",
                  height: 100 / this.props.dataArraySize + "%",
                }}
              ></div>
            ))
          : this.props.dataArray.map((value, index) => (
              <div
                className="vertical-bar"
                key={index}
                style={{
                  width: 100 / this.props.dataArraySize + "%",
                  height: value + "%",
                }}
              ></div>
            ))}
      </div>
    );
  }
}

SortingVisualizer.propTypes = {
  dataArray: PropTypes.array.isRequired,
  dataArraySize: PropTypes.number.isRequired,
  isHorizontalDirection: PropTypes.bool.isRequired,
  updateDataArray: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    dataArray: state.dataArray,
    isHorizontalDirection: state.isHorizontalDirection,
    dataArraySize: state.dataArraySize,
  };
};

const mapDispatchToProps = {
  updateDataArray: actions.updateDataArray,
};

export default connect(mapStateToProps, mapDispatchToProps)(SortingVisualizer);
