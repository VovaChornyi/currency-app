import React, { Component } from "react";
import ToolBar from "../ToolBar";
import Content from "../Content";

export default class App extends Component {
  render() {
    return (
      <div>
        <ToolBar />
        <Content />
      </div>
    );
  }
}
