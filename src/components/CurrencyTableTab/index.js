import React, { Component } from "react";
import CurrencyTable from "../CurrencyTable";
import DatePicker from "../DatePicker";

export default class CurrencyTableTab extends Component {
  render() {
    return (
      <div>
        <DatePicker />
        <CurrencyTable />
      </div>
    );
  }
}
