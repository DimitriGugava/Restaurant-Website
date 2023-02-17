import "./book.css";
import Bottom from "../Bottom/Bottom";
import arrow from "../icons/arrow.svg";
import { Link } from "react-router-dom";
import React, { useState } from "react";

const Book = () => {
  const [amPm, setAmPm] = useState(false);
  const [amToPm, setAmToPm] = useState(false);
  const [peopleNumber, setPeopleNumber] = useState(0);

  const SelectAmPm = () => {
    return setAmPm(!amPm);
  };

  const ChangeToAm = () => {
    if (amPm) {
      setAmPm(true);
      setAmToPm(false);
    }
  };
  const ChangeToPm = () => {
    if (amPm) {
      setAmPm(true);
      setAmToPm(true);
    }
  };

  const AddPeople = () => {
    return setPeopleNumber(peopleNumber + 1);
  };
  const subtractPeople = () => {
    return setPeopleNumber(peopleNumber - 1);
  };
  return (
    <>
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
            <input placeholder="Name" className="inputName" type="text" />
          </div>
          <div className="reserInputBoxEmail">
            <input placeholder="Email" className="inputEmail" type="email" />
          </div>
          <div className="pickADateCont">
            <h1 className="pickADateText">Pick a date</h1>
            <div className="pickaDateBox">
              <input type="number" className="month" placeholder="MM" />
              <input type="number" className="day" placeholder="DD" />
              <input type="number" className="year" placeholder="YYYY" />
            </div>
          </div>
          <div className="pickADateCont">
            <h1 className="pickADateText">Pick a time</h1>
            <div className="pickaDateBox">
              <input type="number" className="month" placeholder="MM" />
              <input type="number" className="day" placeholder="DD" />
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
    </>
  );
};
export default Book;
