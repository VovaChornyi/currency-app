import React, { Component } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import Button from "react-bootstrap/Button";

export default class DatePicker extends Component {
  state = {
    date: Date()
  };

  setDate = selectedDate => {
    this.setState({ date: selectedDate });
  };

  render() {
    return (
      <div>
        {this.getDatePicker()}

        <Button style={{ margin: "5px" }} variant="success" onClick={c => c}>
          Get Rates
        </Button>
      </div>
    );
  }

  getDatePicker() {
    return (
      <>
        <p>Please select a day:</p>
        <DayPickerInput onDayChange={this.setDate} />
      </>
    );
  }
}
