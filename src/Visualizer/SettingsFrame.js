import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import * as actions from "../Redux/actions";
import { resetArray, algorithm } from "../Algorithms/Algorithms";
import * as algorithmTypes from "../Algorithms/AlgorithmTypes";
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
          margin: "0.5% 5%",
        }}
      >
        <label>
          <span>Horizontal Array</span>
          <Switch
            onChange={() => {
              this.props.togglePlotDirection();
              this.props.updateAlgorithm(algorithmTypes.NAN);
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
              this.props.updateAlgorithm(algorithmTypes.NAN);
            }}
            disabled={this.props.isSortRunning}
          />
          <span id="rangeval">{this.props.dataArraySize}</span>
        </div>
        <button
          className="btn btn-outline-primary"
          type="submit"
          onClick={() => {
            this.props.updateAlgorithm(algorithmTypes.NAN);
            this.props.updateDataArray(resetArray(this.props.dataArraySize));
          }}
          disabled={this.props.isSortRunning}
        >
          Generate New Array
        </button>
        <button
          className="btn btn-outline-primary"
          type="submit"
          onClick={() => {
            this.props.updateAlgorithm(algorithmTypes.MERGE_SORT);
          }}
          disabled={this.props.isSortRunning}
        >
          Merge Sort
        </button>
        <button
          className="btn btn-outline-primary"
          type="submit"
          onClick={() => {
            this.props.updateAlgorithm(algorithmTypes.QUICK_SORT);
          }}
          disabled={this.props.isSortRunning}
        >
          Quick Sort
        </button>
        <button
          className="btn btn-outline-primary"
          type="submit"
          onClick={() => {
            this.props.updateAlgorithm(algorithmTypes.HEAP_SORT);
          }}
          disabled={this.props.isSortRunning}
        >
          Heap Sort
        </button>
        <button
          className="btn btn-outline-primary"
          type="submit"
          onClick={() => {
            this.props.updateAlgorithm(algorithmTypes.INSERTION_SORT);
          }}
          disabled={this.props.isSortRunning}
        >
          Insertion Sort
        </button>
        <button
          className="btn btn-outline-primary"
          type="submit"
          onClick={() => {
            this.props.updateAlgorithm(algorithmTypes.BUBBLE_SORT);
          }}
          disabled={this.props.isSortRunning}
        >
          Bubble Sort
        </button>
        <button
          className="btn btn-outline-primary"
          type="submit"
          onClick={() => {
            const array = [...this.props.dataArray];
            algorithm(array, this.props.algorithm);
            this.props.updateAlgorithm(algorithmTypes.NAN);
          }}
          disabled={this.props.isSortRunning || this.props.algorithm === 0}
        >
          Start
        </button>
      </div>
    );
  }
}

SettingsFrame.propTypes = {
  dataArray: PropTypes.array.isRequired,
  dataArraySize: PropTypes.number.isRequired,
  isHorizontalDirection: PropTypes.bool.isRequired,
  isSortRunning: PropTypes.bool.isRequired,
  updateDataArray: PropTypes.func.isRequired,
  togglePlotDirection: PropTypes.func.isRequired,
  updateAlgorithm: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    dataArray: state.dataArray,
    dataArraySize: state.dataArraySize,
    isHorizontalDirection: state.isHorizontalDirection,
    isSortRunning: state.isSortRunning,
    algorithm: state.algorithm,
  };
};

const mapDispatchToProps = {
  updateDataArray: actions.updateDataArray,
  updateDataArraySize: actions.updateDataArraySize,
  togglePlotDirection: actions.togglePlotDirection,
  updateAlgorithm: actions.updateAlgorithm,
};

export default connect(mapStateToProps, mapDispatchToProps)(SettingsFrame);
