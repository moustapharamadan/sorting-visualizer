import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../Redux/actions";
import { resetArray, mergeSort } from "../Algorithms/Algorithms";
import Switch from "react-switch";

class SettingsFrame extends Component {
  render() {
    return (
      <div
        className="btn-group"
        role="group"
        aria-label="Basic example"
        style={{
          display: "flex",
          margin: "0 5%",
        }}
      >
        <label>
          <span>Horizontal Array</span>
          <Switch
            onChange={() => {
              this.props.togglePlotDirection();
            }}
            checked={this.props.isHorizontalDirection}
            className="react-switch"
          />
        </label>
        <div
          style={{
            margin: "0 10px",
          }}
        >
          <label htmlFor="formControlRange">Number of Elements</label>
          <input
            type="range"
            className="form-control-range"
            id="formControlRange"
            min="5"
            max="1000"
            onInput={(event) => {
              this.props.updateDataArraySize(parseInt(event.target.value));
              this.props.updateDataArray(
                resetArray(parseInt(event.target.value))
              );
            }}
          />
          <span id="rangeval">{this.props.dataArraySize}</span>
        </div>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={() =>
            this.props.updateDataArray(resetArray(this.props.dataArraySize))
          }
        >
          Generate New Array
        </button>
        <button
          className="btn btn-primary"
          type="submit"
          onClick={() => {
            const array = [...this.props.dataArray];
            mergeSort(array, this.props.updateDataArray);
          }}
        >
          Merge Sort
        </button>
        <button className="btn btn-primary" type="submit" onClick={() => {}}>
          Quick Sort
        </button>
        <button className="btn btn-primary" type="submit" onClick={() => {}}>
          Heap Sort
        </button>
        <button className="btn btn-primary" type="submit" onClick={() => {}}>
          Bubble Sort
        </button>
      </div>
    );
  }
}

SettingsFrame.propTypes = {
  dataArray: PropTypes.array.isRequired,
  dataArraySize: PropTypes.number.isRequired,
  isHorizontalDirection: PropTypes.bool.isRequired,
  updateDataArray: PropTypes.func.isRequired,
  togglePlotDirection: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    dataArray: state.dataArray,
    dataArraySize: state.dataArraySize,
    isHorizontalDirection: state.isHorizontalDirection,
  };
};

const mapDispatchToProps = {
  updateDataArray: actions.updateDataArray,
  updateDataArraySize: actions.updateDataArraySize,
  togglePlotDirection: actions.togglePlotDirection,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsFrame);
