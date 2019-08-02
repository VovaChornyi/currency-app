import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Converter from "../Calculator";
import CurrencyTable from "../Table";

export default class Content extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/converter" component={Converter} />
        <Route path="/currency-table" component={CurrencyTable} />
      </Switch>
    );
  }
}
