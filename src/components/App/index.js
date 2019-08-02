import React, { Component } from "react";
import ToolBar from "../ToolBar";
import Content from "../Content";
import Footer from "../Footer";

export default class App extends Component {
  render() {
    return (
      <div>
        <ToolBar />
        <Content />
        <Footer />
      </div>
    );
  }
}
