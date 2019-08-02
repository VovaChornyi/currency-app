import React, { Component } from "react";
import jsonp from "jsonp";
import Table from "react-bootstrap/Table";

export default class CurrencyTable extends Component {
  state = {
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

  static getTableBody(items) {
    return <tbody>{items.map(CurrencyTable.getTableRow)}</tbody>;
  }

  static getTableRow(item, key) {
    return (
      <tr key={key}>
        <td>{item.currency_code}</td>
        <td>{item.unit_value}</td>
        <td>{item.buying_rate}</td>
        <td>{item.median_rate}</td>
        <td>{item.selling_rate}</td>
      </tr>
    );
  }

  static getTableHead() {
    return (
      <thead>
        <tr>
          <th>Currency</th>
          <th>Unit Value</th>
          <th>Buying rate</th>
          <th>Median rate</th>
          <th>Selling rate</th>
        </tr>
      </thead>
    );
  }

  render() {
    return (
      <Table striped bordered hover responsive>
        {CurrencyTable.getTableHead()}
        {CurrencyTable.getTableBody(this.state.currencies)}
      </Table>
    );
  }
}
