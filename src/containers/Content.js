import React from "react";

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <div className="announce-wrapper">
          <div id="announce">
            <div id="announce-text">
              <div>
                <h2 id="announce-title">HOLIDAY HOURS</h2>
              </div>
              <div>
                <p>
                  Ko will have the following adjusted hours during the holiday
                  season.
                  <br />
                  We apologize for any inconvenience.
                  <br />
                  <br />
                  December 25 (Christmas Day) – Closed
                  <br />
                  January 1 (New Year’s Day) – Closed
                </p>
              </div>
            </div>
            <div id="announce-logo" />
          </div>
        </div>
        <div id="info-div-wrapper">
          <div id="info-div">
            <div id="info-box-one">
              <div id="info-box-one-text">
                <h2>MAIN DINING ROOM</h2>
                <div id="info-box-small-text">
                  <p>
                    Reservations are required for the tasting menu in the Main
                    Dining Room and are accepted online 30 days in advance.
                  </p>
                  <div id="info-one-links">
                    <a href="https://sandy-edwards-ko-redesign.herokuapp.com/">
                      COUNTER RESERVATIONS
                    </a>
                    &nbsp; | &nbsp;
                    <a href="https://sandy-edwards-ko-redesign.herokuapp.com/">
                      TABLE RESERVATIONS
                    </a>
                  </div>
                </div>
              </div>
              <img
                alt="Momofuku Ko Restaurant Interior"
                src={require("../images/interior/interior.jpg")}
              />
            </div>
            <hr id="info-div-hr" />
            <div id="info-box-two">
              <img
                alt="Momofuku Ko Bar"
                src={require("../images/interior/bar.jpg")}
              />
              <div id="info-box-two-text">
                <h2>BAR</h2>
                <div id="info-box-small-text-two">
                  <p>
                    The Ko bar serves an evolving a la carte menu and an
                    expansive beverage program.
                    <br />
                    <br />
                    The bar is available for walk-ins only. No reservations are
                    taken.
                  </p>
                  <div id="info-one-links">
                    <a href="https://sandy-edwards-ko-redesign.herokuapp.com/">
                      MORE INFO
                    </a>
                    &nbsp; | &nbsp;
                    <a href="https://sandy-edwards-ko-redesign.herokuapp.com/">
                      VIEW MENU
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
