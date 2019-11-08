import React, { Component } from "react";
import { loadData } from "../utils/loadData";
import StationList from "./stationList";
import { Button } from "bloomer";
// import UpdateTrains from "./updateTrains";

class TrainTable extends Component {
  state = {
    trainData: []
  };

  async componentDidMount() {
    this.updateTrains();
  }

  updateTrains = async () => {
    const trainData = await loadData(
      `http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=38713de0-2f9d-4c15-a510-533e53718c3e`
    );
    this.setState({
      trainData
    });
  };

  handleClick = e => {
    e.preventDefault();
    this.updateTrains();
  };

  render() {
    const { trainData } = this.state;
    return (
      <>
        <StationList />
        <Button
          isColor="info"
          isSize="medium"
          onClick={e => this.handleClick(e)}
        >
          Update Trains
        </Button>
        <table>
          <tbody>
          <tr>
            <th>Station</th>
            <th>Line</th>
            <th>Direction</th>
            <th>Arrival Time</th>
            <th>Wait Time</th>
          </tr>

          {trainData.map((train, id) => {
            return (
              <tr key={`train-${id}`}>
                <td>{train.STATION}</td>
                <td>{train.LINE}</td>
                <td>{train.DIRECTION}</td>
                <td>{train.NEXT_ARR}</td>
                <td>{train.WAITING_TIME}</td>
              </tr>
            );
          })}
          </tbody>
        </table>
      </>
    );
  }
}

export default TrainTable;
