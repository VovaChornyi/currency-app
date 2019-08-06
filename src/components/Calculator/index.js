import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Converter extends Component {
  state = {
    from: "EN",
    to: "EN",
    inputValue: 0.0,
    result: 0.0
  };
  render() {
    return (
      <div>
        <h2>Currency Converter</h2>
        <p>Uses the median exchange rate</p>
        <Form className="mb-3">
          <Form.Row>
            <Form.Group controlId="formGridAddress2">
              <Form.Control placeholder="Apartment, studio, or floor" />
            </Form.Group>
            {this.createDropdown("dropdown-from")}

            <p> = </p>
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Control />
            </Form.Group>

            {this.createDropdown("dropdown-to")}
            <Button variant="success" id="submit" size="sm">
              Submit
            </Button>
          </Form.Row>
        </Form>
      </div>
    );
  }

  createDropdown(id) {
    return (
      <Form.Group as={Col} controlId="formGridState">
        <Form.Control as="select">
          {this.props.data.map(item => (
            <option key={item.currency_code}>{item.currency_code}</option>
          ))}
        </Form.Control>
      </Form.Group>
    );
  }
}
