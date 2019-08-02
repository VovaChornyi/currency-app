import React, { Component } from "react";
import CurrencyTable from "../CurrencyTable";
import DatePicker from "../DatePicker";
import jsonp from "jsonp";

export default class CurrencyTableTab extends Component {
  state = {
    date: Date(),
    currencies: []
  };

  componentDidMount() {
    jsonp(
      "http://hnbex.eu/api/v1/rates/daily/?date=2019-08-02",
      null,
      (err, data) => {
        this.setState({ currencies: data });
        if (err) {
          console.log(err);
        }
      }
    );
  }

  render() {
    return (
      <div>
        <DatePicker />
        <CurrencyTable data={this.state.currencies} />
      </div>
    );
  }
}
