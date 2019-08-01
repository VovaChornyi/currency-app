import React, { Component } from "react";

export default class Table extends Component {
  state = {
    currencies: [
      {
        currency_code: "AUD",
        buying_rate: "4.544384",
        selling_rate: "4.571732",
        unit_value: 1,
        median_rate: "4.558058"
      },
      {
        currency_code: "CAD",
        buying_rate: "5.006467",
        selling_rate: "5.036597",
        unit_value: 1,
        median_rate: "5.021532"
      },
      {
        currency_code: "CZK",
        buying_rate: "0.286544",
        selling_rate: "0.288268",
        unit_value: 1,
        median_rate: "0.287406"
      },
      {
        currency_code: "DKK",
        buying_rate: "0.984556",
        selling_rate: "0.990482",
        unit_value: 1,
        median_rate: "0.987519"
      },
      {
        currency_code: "HUF",
        buying_rate: "2.244031",
        selling_rate: "2.257535",
        unit_value: 100,
        median_rate: "2.250783"
      },
      {
        currency_code: "JPY",
        buying_rate: "6.075705",
        selling_rate: "6.112269",
        unit_value: 100,
        median_rate: "6.093987"
      },
      {
        currency_code: "NOK",
        buying_rate: "0.755141",
        selling_rate: "0.759685",
        unit_value: 1,
        median_rate: "0.757413"
      },
      {
        currency_code: "SEK",
        buying_rate: "0.691130",
        selling_rate: "0.695290",
        unit_value: 1,
        median_rate: "0.693210"
      },
      {
        currency_code: "CHF",
        buying_rate: "6.657305",
        selling_rate: "6.697369",
        unit_value: 1,
        median_rate: "6.677337"
      },
      {
        currency_code: "GBP",
        buying_rate: "8.036510",
        selling_rate: "8.084874",
        unit_value: 1,
        median_rate: "8.060692"
      },
      {
        currency_code: "USD",
        buying_rate: "6.595187",
        selling_rate: "6.634877",
        unit_value: 1,
        median_rate: "6.615032"
      },
      {
        currency_code: "BAM",
        buying_rate: "3.758505",
        selling_rate: "3.781123",
        unit_value: 1,
        median_rate: "3.769814"
      },
      {
        currency_code: "EUR",
        buying_rate: "7.350996",
        selling_rate: "7.395234",
        unit_value: 1,
        median_rate: "7.373115"
      },
      {
        currency_code: "PLN",
        buying_rate: "1.713639",
        selling_rate: "1.723951",
        unit_value: 1,
        median_rate: "1.718795"
      }
    ]
  };

  render() {
    return this.state.currencies.map(item => <div> {item.currency_code}</div>);
  }
}
