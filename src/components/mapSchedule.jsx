import React, { Component } from "react";
import { Container, Box } from "bloomer";

class MapSchedule extends Component {
  render() {
    return (
      <div id="fullMapSchedule">
        <div className="map">
          <img id="map2" src="images/busMap.png" />
        </div>
        <div className="buttonDiv" id="buttonDiv1">
          <a
            href="https://www.itsmarta.com/bus-routes.aspx"
            target="_blank"
            className="scheduleButton"
          >
            All bus routes and schedules
          </a>
        </div>

        <div className="map">
          <img id="map1" src="images/trainMap.jpg" />
        </div>
        <div className="buttonDiv" id="buttonDiv2">
          <a
            href="https://www.itsmarta.com/train-stations-and-schedules.aspx"
            target="blank"
            className="scheduleButton"
          >
            All train stations and schedules
          </a>
        </div>
      </div>
    );
  }
}

export default MapSchedule;
