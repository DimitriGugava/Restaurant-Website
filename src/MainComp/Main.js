import React from "react";
import "./Main.css";
import pizzaphoto from "../icons/pizzaphoto.svg";
import villageImage from "../icons/villageImage.svg";
import salmonimage from "../icons/salmonimage.svg";
import rosemary from "../icons/rosemary.svg";
import summerfruit from "../icons/summerfruit.svg";
import gathering from "../icons/gathering.svg";
import Bottom from "../Bottom/Bottom";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div className="mainpage">
        <div className="mainPageHeaderBox">
          <img src={pizzaphoto} className="pizzaPhoto" />
          <div className="mainPageHeaderConcentBox">
            <h1 className="mainPageHeaderText">Dine</h1>
            <a className="mainPageSecondText">Exquisite dining since 1989</a>
            <a className="mainPageNormalText">
              Experience our seasonal menu in beautiful country surroundings.
              Eat the freshest produce from the comfort of our farmhouse.
            </a>
            <Link to="/reservation" className="bookTableButton">
              Book a table
            </Link>
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
              Our relaxed surroundings make dining with us a great experience
              for everyone. We can even arrange a tour of the farm before your
              meal.
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
              All our ingredients come directly from our farm or local fishery.
              So you can be sure that you’re eating the freshest, most
              sustainable food.
            </a>
          </div>
        </div>
        <div className="thirdPartOfMainPage">
          <div className="thirdPartContentBox">
            <div className="thirdPartContentHeader">
              <div className="thirdPartLine"></div>
              <div className="thirdPartHeaderTextualBox">
                <div className="thirdPartHeaderText">
                  A few highlights from our menu
                </div>
                <a className="thirdPartNormalText">
                  We cater for all dietary requirements, but here’s a glimpse at
                  some of our diner’s favourites. Our menu is revamped every
                  season.
                </a>
              </div>
              <div className="thirdPartFoodList">
                <div className="foodInfoBox">
                  <img src={salmonimage} />
                  <div className="foodContent">
                    <h2 className="foodTitle">Seared Salmon Fillet</h2>
                    <a className="foodDescription">
                      Our locally sourced salmon served with a refreshing
                      buckwheat summer salad.
                    </a>
                  </div>
                </div>
                <div className="foodInfoBox">
                  <img src={rosemary} />
                  <div className="foodContent">
                    <h2 className="foodTitle">Rosemary Filet Mignon</h2>
                    <a className="foodDescription">
                      Our prime beef served to your taste with a delicious
                      choice of seasonal sides.
                    </a>
                  </div>
                </div>
                <div className="foodInfoBox">
                  <img src={summerfruit} />
                  <div className="foodContent">
                    <h2 className="foodTitle">Summer Fruit Chocolate Mousse</h2>
                    <a className="foodDescription">
                      Creamy mousse combined with summer fruits and dark
                      chocolate shavings.
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="fourthPartSelectTypeCont">
          <img src={gathering} className="gatheringImage" />
          <div className="selectCategory">
            <a className="categoryText">FAMILY GATHERING</a>
            <a className="categoryText">SPECIAL EVENTS</a>
            <a className="categoryText">SOCIAL EVENTS</a>
          </div>
          <div className="categoryDescriptionContentBox">
            <a className="categoryDecriptionHeader">Family Gathering</a>
            <a className="categoryDescriptionNormalText">
              We love catering for entire families. So please bring everyone
              along for a special meal with your loved ones. We’ll provide a
              memorable experience for all.
            </a>
          </div>
          <Link to="/reservation" className="bookaTableFirstBox">
            BOOK A TABLE
          </Link>
        </div>
        <div className="fifthPartReadyForReserCont">
          <div className="readyToMakeReserContentBox">
            <a className="readyToMakeReservationText">
              Ready to make a reservation?
            </a>
            <Link to="/reservation" className="bookTableSecondBox">
              BOOK A TABLE
            </Link>
          </div>
        </div>
      </div>
      <Bottom />
    </>
  );
};

export default Main;
