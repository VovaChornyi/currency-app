import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home";
import Converter from "../Calculator";
import CurrencyTableTab from "../CurrencyTableTab";
import Container from "react-bootstrap/Container";
import jsonp from "jsonp";
import DatePicker from "../DatePicker";

export default class Content extends Component {
  state = {
    currencies: []
  };

  componentDidMount() {
    this.fetchData(DatePicker.formatDate(Date()));
  }

  fetchData = date => {
    jsonp(
      "http://hnbex.eu/api/v1/rates/daily/?date=" + date,
      null,
      (err, data) => {
        this.setState({ currencies: data });
        if (err) {
          console.log(err);
        }
      }
    );
  };

  render() {
    return (
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route
            path="/converter"
            render={() => <Converter data={this.state.currencies} />}
          />
          <Route
            path="/currency-table"
            render={() => (
              <CurrencyTableTab
                data={this.state.currencies}
                fetchData={this.fetchData}
              />
            )}
          />
        </Switch>
      </Container>
    );
  }
}
