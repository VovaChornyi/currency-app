import React, { Component } from "react";
import CurrencyTable from "../CurrencyTable";
import DatePicker from "../DatePicker";

export default class CurrencyTableTab extends Component {
  render() {
    return (
      <div>
        <DatePicker submitCallback={this.props.fetchData} />
        <CurrencyTable data={this.props.data} />
      </div>
    );
  }
}
