import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Collapse from "@material-ui/core/Collapse";

class AlgorithmInfo extends Component {
  algorithmInfoArray = [
    { name: "", descirption: "", complexity: "" },
    {
      name: "Bubble Sort",
      descirption:
        "Bubble sort performs sorting by checking the neighboring data elements and swapping them if they are in wrong order",
      complexity: "O(n²)",
    },
    {
      name: "Heap Sort",
      descirption:
        "Merge sort is a Divide and Conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.",
      complexity: "O(n*Log n)",
    },
    {
      name: "Insertion Sort",
      descirption:
        "Insertion sort performs sorting by transferring one element to a partially sorted array at a time.",
      complexity: "O(n²)",
    },
    {
      name: "Merge Sort",
      descirption:
        "Merge sort is a divide-and-conquer algorithm. It divides the input array into two halves, calls itself for the two halves, and then merges the two sorted halves.",
      complexity: "O(n*Log n)",
    },
    {
      name: "Quick Sort",
      descirption:
        "Quick sort is a divide-and-conquer algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot.",
      complexity: "O(n*Log n)",
    },
  ];

  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  render() {
    const info = this.algorithmInfoArray[this.props.algorithm];
    const open = this.props.algorithm !== 0;
    return (
      <div style={{ width: "90%", margin: "auto", marginBottom: "0.5%" }}>
        <Collapse in={open}>
          <div id="collapse-text" class="card card-body">
            <p>
              {info.descirption}
              <br />
              Complexity: {info.complexity}
            </p>
          </div>
        </Collapse>
      </div>
    );
  }
}

AlgorithmInfo.propTypes = {
  algorithm: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => {
  return {
    algorithm: state.algorithm,
  };
};

export default connect(mapStateToProps)(AlgorithmInfo);
