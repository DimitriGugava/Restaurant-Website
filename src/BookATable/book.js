import "./book.css";
import Bottom from "../Bottom/Bottom";
import arrow from "../icons/arrow.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useEffect } from "react";

const Book = () => {
  const [amPm, setAmPm] = useState(false);
  const [amToPm, setAmToPm] = useState(false);
  const [peopleNumber, setPeopleNumber] = useState(0);
  const [name, setName] = useState("");

  const SelectAmPm = () => {
    return setAmPm(!amPm);
  };

  const ChangeToAm = () => {
    if (amPm) {
      setAmPm(false);
      setAmToPm(false);
    }
  };
  const ChangeToPm = () => {
    if (amPm) {
      setAmPm(false);
      setAmToPm(true);
    }
  };

  const AddPeople = () => {
    return setPeopleNumber(peopleNumber + 1);
  };
  const subtractPeople = () => {
    return setPeopleNumber(peopleNumber - 1);
  };

  const nameInput = (e) => {
    setName(e.target.value);
  };

  useEffect(() => {
    setTimeout(() => {}, 1);
    return () => {
      clearTimeout(nameInput);
    };
  }, [nameInput]);

  const emailInput = (e) => {
    const email = e.target.value;
    console.log(email);
  };

  const makeReservation = (e) => {
    e.preventDefault();
    const name = e.target.elements.name.value;
    const email = e.target.elements.email.value;
    const month = e.target.elements.month.value;
    const day = e.target.elements.day.value;
    const year = e.target.elements.year.value;
    const time = `${e.target.elements.time_hour.value}:${
      e.target.elements.time_minute.value
    }${amToPm ? "pm" : "am"}`;
    const people = peopleNumber;

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Date:", `${month}/${day}/${year}`);
    console.log("Time:", time);
    console.log("Number of people:", people);

    setAmPm(false);
    setAmToPm(false);
    setPeopleNumber(0);
  };

  return (
    <form onSubmit={makeReservation}>
      <div className="bookMainCont">
        <div className="reservationContent">
          <div className="reservationContentBox">
            <h1 className="reservationHeaderText">dine</h1>
            <h2 className="reservationHeaderSecondText">Reservations</h2>
            <a className="reservationNormalText">
              We can’t wait to host you. If you have any special requirements
              please feel free to call on the phone number below. We’ll be happy
              to accommodate you.
            </a>
          </div>
          <Link to="/" className="goToMain">
            Go To Main Page
          </Link>
        </div>
        <div className="reservationCalculatorBox">
          <div className="reserInputBox">
            <input
              placeholder="Name"
              name="name"
              className="inputName"
              type="text"
              onChange={nameInput}
            />
          </div>
          <div className="reserInputBoxEmail">
            <input
              placeholder="Email"
              className="inputEmail"
              type="email"
              name="email"
              onChange={emailInput}
            />
          </div>
          <div className="pickADateCont">
            <h1 className="pickADateText">Pick a date</h1>
            <div className="pickaDateBox">
              <input
                name="date"
                type="number"
                className="month"
                placeholder="MM"
              />
              <input type="number" className="day" placeholder="DD" />
              <input type="number" className="year" placeholder="YYYY" />
            </div>
          </div>
          <div className="pickADateCont">
            <h1 className="pickADateText">Pick a time</h1>
            <div className="pickaDateBox">
              <input
                name="time_hour"
                type="number"
                className="month"
                placeholder="HH"
                max={12}
              />
              <input
                name="time_minute"
                type="number"
                className="day"
                placeholder="Minute"
                max={59}
              />
              {!amToPm ? (
                <input type="text" className="amPm" placeholder="AM" />
              ) : (
                <input type="text" className="amPm" placeholder="PM" />
              )}
              {!amPm ? (
                <img className="arrow" src={arrow} onClick={SelectAmPm} />
              ) : (
                <>
                  <img className="arrow" src={arrow} onClick={SelectAmPm} />
                  <div className="amPmBox">
                    <a className="amPmSelector" onClick={ChangeToAm}>
                      AM
                    </a>
                    <a className="amPmSelector" onClick={ChangeToPm}>
                      PM
                    </a>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="peopleBox">
            <div className="minus" onClick={subtractPeople}>
              -
            </div>
            <a className="peopleNumber">
              {peopleNumber} <span className="peopleText">people</span>
            </a>
            <div className="plus" onClick={AddPeople}>
              +
            </div>
          </div>
          <button className="makeReservation">MAKE RESERVATION</button>
        </div>
      </div>
      <Bottom />
    </form>
  );
};
export default Book;
