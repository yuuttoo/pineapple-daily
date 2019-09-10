import React, { Component } from "react";

class DateCounter extends Component {
  state = {
    weekDayNameCounter: 0,
    monthNameCounter: 0,
    dayOfTheMonth: "",
    year: 1971,

    days: ["星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"],
    months: [
      "1月",
      "2月",
      "3月",
      "4月",
      "5月",
      "6月",
      "7月",
      "8月",
      "9月",
      "10月",
      "11月",
      "12月"
    ]
  };

  componentDidMount() {
    const dateNow = new Date();
    const dayNow = dateNow.getDay();
    const dayOfMonthNow = dateNow.getDate();
    const monthNow = dateNow.getMonth();
    const yearNow = dateNow.getFullYear();

    this.setState({
      weekDayNameCounter: dayNow,
      monthNameCounter: monthNow,
      dayOfTheMonth: dayOfMonthNow,
      year: yearNow
    });
  }
  render() {
    return (
      <div className="date-container">
        <p>
          {this.state.year}{"年"}
          {this.state.months[this.state.monthNameCounter]}{""}
          {this.state.dayOfTheMonth}{"日  "}
          {this.state.days[this.state.weekDayNameCounter]}{" "}
        </p>
      </div>
    );
  }
}

export default DateCounter;
