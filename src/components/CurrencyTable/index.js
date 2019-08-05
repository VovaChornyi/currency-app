import React, { Component } from "react";
import Table from "react-bootstrap/Table";

export default class CurrencyTable extends Component {
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
        {CurrencyTable.getTableBody(this.props.data)}
      </Table>
    );
  }
}
