import React, { Component } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class Converter extends Component {
  state = {
    from: "EN",
    to: "EN",
    inputValue: 100,
    result: 0
  };

  calculate = () => {
    let inputValue = document.getElementById("inputValue").value;
    let from = document.getElementById("dropdown-from").value;
    let to = document.getElementById("dropdown-to").value;
    if (from === to) {
      alert("You can not choose same currency");
    }
    let result = (inputValue * from) / to;
    this.setState({ result: result });
  };

  changeInput = () => {
    let newValue = document.getElementById("inputValue").value;
    this.setState({ inputValue: newValue });
  };

  render() {
    return (
      <div>
        <h2>Currency Converter</h2>
        <p>Uses the median exchange rate</p>
        <Form className="mb-3">
          <Form.Row>
            <Form.Group controlId="inputValue">
              <Form.Control
                value={this.state.inputValue}
                onChange={this.changeInput}
              />
            </Form.Group>
            {this.createDropdown("dropdown-from")}

            <p> = </p>
            <Form.Group as={Col} controlId="result">
              <Form.Control value={this.state.result} />
            </Form.Group>

            {this.createDropdown("dropdown-to")}
            <Button
              variant="success"
              id="submit"
              size="sm"
              onClick={this.calculate}
            >
              Submit
            </Button>
          </Form.Row>
        </Form>
      </div>
    );
  }

  createDropdown(id) {
    return (
      <Form.Group as={Col} controlId={id}>
        <Form.Control as="select">
          <option key={"HRZ"} value={1}>
            HRZ
          </option>
          {this.props.data.map(item => (
            <option key={item.currency_code} value={item.median_rate}>
              {item.currency_code}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
    );
  }
}
