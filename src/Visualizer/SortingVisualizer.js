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
    debugger;
    return (
      <div className="sort-container">
        {this.props.isHorizontalDirection
          ? this.props.dataArray.map((row) => (
              <div
                className="horizontal-bar"
                key={row.id}
                style={{
                  width: row.value + "%",
                  height: 100 / this.props.dataArraySize + "%",
                }}
              ></div>
            ))
          : this.props.dataArray.map((column) => (
              <div
                className="vertical-bar"
                key={column.id}
                style={{
                  width: 100 / this.props.dataArraySize + "%",
                  height: column.value + "%",
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
