import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Converter from "../Calculator";
import CurrencyTableTab from "../CurrencyTableTab";
import Container from "react-bootstrap/Container";

export default class Content extends Component {
  render() {
    return (
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/converter" component={Converter} />
          <Route path="/currency-table" component={CurrencyTableTab} />
        </Switch>
      </Container>
    );
  }
}
