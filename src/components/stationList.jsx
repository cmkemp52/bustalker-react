import React, { Component } from "react";
import { loadData } from "../utils/loadData";

class StationList extends Component {
  state = {
    stations: []
  };

  async componentDidMount() {
    const stationData = await loadData(
      `http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=38713de0-2f9d-4c15-a510-533e53718c3e`
    );

    const stationList = await stationData.map((station, id) => {
      return station.STATION;
    });

    const stations = [...new Set(stationList)].sort();
    // console.log(stations);

    this.setState({
      stations
    });
  }

  render() {
    const { stations } = this.state;
    return (
      <select>
        <option>Select a station</option>
        {stations.map((station, id) => {
          return (
            <option key={`station-${id}`} value={station}>
              {station}
            </option>
          );
        })}
      </select>
    );
  }
}
export default StationList;
