import React, { Component } from "react";

export default class Counter extends Component {
  state = { value: 1 };

  incrementValue() {
    console.log("clicked");
    this.setState({ value: this.state.value + 1 });
  }

  render() {
    return (
      <>
        <div>{this.state.value}</div>
        <button onClick={() => this.incrementValue()}> Increment </button>
      </>
    );
  }
}
