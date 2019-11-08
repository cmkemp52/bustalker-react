import React from "react";
import "./main.css";
import NavBar from "./components/navbar";
import BusTracker from "./components/busTracker";
import StationList from "./components/stationList";
import MapSchedule from "./components/mapSchedule";
import ContactInfo from "./components/contactInfo";
import MadeBy from "./components/madeBy";
import TrainTable from "./components/trainTable";
import Home from './components/home';
import "bulma/css/bulma.css";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Home />
      <BusTracker />

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
