import React, { Component } from "react";
import DayPickerInput from "react-day-picker/DayPickerInput";
import "react-day-picker/lib/style.css";
import Button from "react-bootstrap/Button";

export default class DatePicker extends Component {
  state = {
    date: DatePicker.formatDate(new Date())
  };

  changeDate = newDate => {
    this.setState({ date: DatePicker.formatDate(newDate) });
  };

  submitData = () => {
    this.props.submitCallback(this.state.date);
  };

  render() {
    return (
      <div>
        {this.getDatePicker()}

        <Button
          style={{ margin: "5px" }}
          variant="success"
          onClick={this.submitData}
        >
          Get Rates
        </Button>
      </div>
    );
  }

  getDatePicker = () => {
    return (
      <>
        <p>Please select a day:</p>
        <DayPickerInput onDayChange={this.changeDate} value={this.state.date} />
      </>
    );
  };

  static formatDate(date) {
    if (date instanceof Date) return date.toISOString().substring(0, 10);
  }
}
