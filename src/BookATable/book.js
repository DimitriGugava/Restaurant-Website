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
  const [email, setEmail] = useState("");
  const [month, setMonth] = useState("");
  const [day, setDay] = useState("");
  const [year, setYear] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [am, setAm] = useState("");
  const [pm, setPm] = useState("");

  const SelectAmPm = (e) => {
    return setAmPm(!amPm);
  };

  const ChangeToAm = (e) => {
    if (amPm) {
      setAmPm(false);
      setAmToPm(false);
    }
  };
  const ChangeToPm = (e) => {
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

  const emailInput = (e) => {
    setEmail(e.target.value);
  };

  const monthInput = (e) => {
    setMonth(e.target.value);
  };
  const dayInput = (e) => {
    setDay(e.target.value);
  };
  const yearInput = (e) => {
    setYear(e.target.value);
  };
  const hourInput = (e) => {
    setHour(e.target.value);
  };
  const minuteInput = (e) => {
    setMinute(e.target.value);
  };
  const amInput = (e) => {
    setAm(e.target.value);
  };
  const pmInput = (e) => {
    setPm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // if (!name || !email || !month || !day || !year || !hour || !minute) {
    //   alert("Please fill in all the required fields.");
    //   return;
    // }

    let formData = {
      name,
      email,
      month,
      day,
      year,
      hour,
      minute,
      am: "",
      pm: "",
      peopleNumber,
    };

    if (!amPm) {
      formData.am = amToPm ? "PM" : "AM";
      formData.pm = "";
    } else {
      formData.am = "";
      formData.pm = "";
    }

    console.log(formData);
    alert(JSON.stringify(formData, null, 2));
  };

  useEffect(() => {
    console.log(name, email, month, day, year, hour, minute, am, pm);
  }, [name, email, month, day, year, hour, minute, am, pm]);

  useEffect(() => {
    setTimeout(() => {}, 1000);
    return () => {
      clearTimeout(nameInput, emailInput);
    };
  }, [nameInput, emailInput]);

  return (
    <form onSubmit={handleSubmit}>
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
                max={12}
                min={1}
                onChange={monthInput}
              />
              <input
                type="number"
                className="day"
                placeholder="DD"
                onChange={dayInput}
                max={31}
                min={1}
              />
              <input
                type="number"
                className="year"
                placeholder="YYYY"
                min={2023}
                onChange={yearInput}
              />
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
                onChange={hourInput}
              />
              <input
                name="time_minute"
                type="number"
                className="day"
                placeholder="Minute"
                max={59}
                onChange={minuteInput}
              />
              {!amToPm ? (
                <input
                  type="text"
                  className="amPm"
                  placeholder="AM"
                  onChange={amInput}
                  value={am}
                />
              ) : (
                <input
                  type="text"
                  className="amPm"
                  placeholder="PM"
                  onChange={pmInput}
                  value={pm}
                />
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
