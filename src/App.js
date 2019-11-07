import React from "react";
import "./App.css";
// import { BusTracker } from "./components/busTracker";
import StationList from "./components/stationList";
import MapSchedule from "./components/mapSchedule";
import ContactInfo from "./components/contactInfo";
import MadeBy from "./components/madeBy";
import TrainTable from "./components/trainTable";

import "bulma/css/bulma.css";

function App() {
  return (
    <div className="App">
      {/* <BusTracker /> */}

      {/* <StationList /> */}

      <TrainTable />

      <MapSchedule />

      <footer>
        <ContactInfo />
        <MadeBy />
      </footer>
    </div>
  );
}

export default App;
