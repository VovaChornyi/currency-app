import React, { Component } from "react";
import CurrencyTable from "../CurrencyTable";
import DatePicker from "../DatePicker";
import jsonp from "jsonp";

export default class CurrencyTableTab extends Component {
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
      <div>
        <DatePicker submitCallback={this.fetchData} />
        <CurrencyTable data={this.state.currencies} />
      </div>
    );
  }
}
