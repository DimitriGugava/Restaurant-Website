import "./book.css";
import Bottom from "../Bottom/Bottom";
import arrow from "../icons/arrow.svg";
const Book = () => {
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
              <input type="text" className="amPm" placeholder="AM" />
              <img className="arrow" src={arrow} />
            </div>
          </div>
          <div className="peopleBox">
            <div className="minus">-</div>
            <a className="peopleNumber">
              0 <span className="peopleText">people</span>
            </a>
            <div className="plus">+</div>
          </div>
          <button className="makeReservation">MAKE RESERVATION</button>
        </div>
      </div>
      <Bottom />
    </>
  );
};
export default Book;
