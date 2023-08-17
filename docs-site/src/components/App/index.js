import React, { useState } from "react";
import ExampleComponents from "../Examples";
import ribbon from "./ribbon.png";
import logo from "./logo.png";
import DatePicker from "react-datepicker";

const Example = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [holidayName, setHolidayName] = useState("");
  const [showOverlay, setShowOverlay] = useState(false);

  // List of holidays
  const holidayData = [
    { date: new Date("2023-08-14"), name: "Holiday 1" },
    { date: new Date("2023-08-23"), name: "Holiday 2" },
    { date: new Date("2023-08-26"), name: "Holiday 3" },
    { date: new Date("2023-08-28"), name: "Holiday 4" },
    { date: new Date("2023-09-01"), name: "Holiday 5" },
  ];

  // Array to Highlight Holidays
  const highlightedHolidays = [
    {
      "react-datepicker__day--highlighted-custom-3": holidayData.map(
        (entry) => entry.date,
      ),
    },
  ];

  // To check if dates are identical
  const isSameDate = (date1, date2) => {
    return (
      date1.getDate() === date2.getDate() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getFullYear() === date2.getFullYear()
    );
  };

  // Display Holidays on Hovering
  const handleHover = (date) => {
    const clickedHoliday = holidayData.find((holiday) =>
      isSameDate(date, holiday.date),
    );
    if (clickedHoliday) {
      setHolidayName(clickedHoliday.name);
      setShowOverlay(true);
    } else {
      setShowOverlay(false);
    }
  };

  const handleDismissOverlay = () => {
    setShowOverlay(false);
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        highlightDates={highlightedHolidays}
        onChange={(date) => setStartDate(date)}
        onDayMouseEnter={handleHover}
        onDayMouseLeave={handleDismissOverlay}
      />
      {showOverlay && (
        <div className="overlayclass" onClick={handleDismissOverlay}>
          {holidayName} !
        </div>
      )}
    </div>
  );
};

const Root = () => (
  <div>
    <div className="hero">
      <div className="hero__content">
        <h1 className="hero__title">React Datepicker</h1>
        <div className="hero__crafted-by">
          <a href="https://hackerone.com" className="hero__crafted-by-link">
            Crafted by{" "}
            <img
              src={logo}
              className="hero__image"
              alt="HackerOne"
              title="HackerOne"
            />
          </a>
        </div>
        <div className="hero__example">
          <Example />
        </div>
      </div>
    </div>
    <div className="wrapper">
      <h1>React Datepicker</h1>
      <p className="badges">
        <a href="https://npmjs.org/package/react-datepicker">
          <img
            src="https://badge.fury.io/js/react-datepicker.svg"
            alt="NPM package version badge"
            className="badge"
          />
        </a>
        <a href="https://github.com/Hacker0x01/react-datepicker/actions/workflows/test.yml">
          <img
            src="https://github.com/Hacker0x01/react-datepicker/actions/workflows/test.yml/badge.svg"
            alt="Test suite status badge"
            className="badge"
          />
        </a>
        <a href="https://david-dm.org/Hacker0x01/react-datepicker">
          <img
            src="https://david-dm.org/Hacker0x01/react-datepicker.svg"
            alt="Dependency status badge"
            className="badge"
          />
        </a>
        <a href={"https://npmjs.org/package/react-datepicker"}>
          <img
            src="https://img.shields.io/npm/dm/react-datepicker.svg"
            alt="Download count badge"
            className="badge"
          />
        </a>
      </p>
      <p>A simple and reusable datepicker component for React.</p>

      <h2>Installation</h2>
      <p>The package can be installed via NPM:</p>
      <p>
        <code>npm install react-datepicker --save</code>
      </p>
      <p>Or by using Yarn:</p>
      <p>
        <code>yarn add react-datepicker</code>
      </p>
      <p>
        Below are examples which also can be edited directly via the editor on
        the left side and will be rendered on the right.
      </p>
    </div>
    <div className="wrapper">
      <ExampleComponents />
    </div>

    <a href="https://github.com/Hacker0x01/react-datepicker/">
      <img className="github-ribbon" src={ribbon} alt="Fork me on GitHub" />
    </a>
  </div>
);

export default Root;
