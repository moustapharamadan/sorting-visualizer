import React, { Component } from "react";
import "./styles.css";

export default class SortingVisualizer extends Component {
  constructor(props) {
    super(props);
    this.state = { array: [] };
  }

  componentDidMount() {
    this.resetArray();
  }

  componentWillUnmount() {
    this.setState({ array: [] });
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < 100; i++) {
      array.push(getRandomFloat(1, 100));
    }
    this.setState({ array });
  }

  render() {
    return (
      <div>
        {/* {this.state.array.map((value, index) => (
          <div
            className="horizontal-bar"
            key={index}
            style={{ width: value + "%" }}
          ></div>
        ))} */}

        {this.state.array.map((value, index) => (
          <div
            className="vertical-bar"
            key={index}
            style={{ height: value + "vh" }}
          ></div>
        ))}
      </div>
    );
  }
}

function getRandomFloat(min, max) {
  return Math.random() * (max - min + 1) + min;
}
