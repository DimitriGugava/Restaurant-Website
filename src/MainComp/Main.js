import React from "react";
import "./Main.css";
import pizzaphoto from "../icons/pizzaphoto.svg";
import villageImage from "../icons/villageImage.svg";
const Main = () => {
  return (
    <div className="mainpage">
      <div className="mainPageHeaderBox">
        <img src={pizzaphoto} className="pizzaPhoto" />
        <div className="mainPageHeaderConcentBox">
          <h1 className="mainPageHeaderText">Dine</h1>
          <a className="mainPageSecondText">Exquisite dining since 1989</a>
          <a className="mainPageNormalText">
            Experience our seasonal menu in beautiful country surroundings. Eat
            the freshest produce from the comfort of our farmhouse.
          </a>
          <button className="bookTableButton">Book a table</button>
        </div>
      </div>

      <div className="mainPageSecondPartContentBox">
        <img className="villageImage" />
        <div className="seoncPartContentBox">
          <div className="secondPartLine"></div>
          <h2 className="seoncPAartHeaderText">
            Enjoyable place for all the family
          </h2>
          <a className="secondPartSecondaryText">
            Our relaxed surroundings make dining with us a great experience for
            everyone. We can even arrange a tour of the farm before your meal.
          </a>
        </div>
      </div>

      <div className="mainPageThirdPartContentBox">
        <img className="dinningImage" />
        <div className="thirdPartContentBox">
          <div className="thirdPartLine"></div>
          <h2 className="thirdPAartHeaderText">
            The most locally sourced food
          </h2>
          <a className="thirdPartSecondaryText">
            All our ingredients come directly from our farm or local fishery. So
            you can be sure that you’re eating the freshest, most sustainable
            food.
          </a>
        </div>
      </div>
    </div>
  );
};

export default Main;
