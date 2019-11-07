import React, {Component} from 'react';
import {loadData} from "../utils/loadData";
import BusMap from './busMap';

class BusTracker extends Component{
    state = {
        busLoc: null
    }
    componentDidMount(){
        this.tick();
    }
    async tick(){
        while(true){
            const busLoc = await loadData("http://developer.itsmarta.com/BRDRestService/RestBusRealTimeService/GetAllBus");
            this.setState({
                busLoc
            })
            setTimeout(5000);
        }
    }

    render(){
        return(
            <div id="trackerPage">
                {this.state.busLoc ? <BusMap busLoc={this.state.busLoc}/> : ""}
            </div>
        )
    }
}

export default BusTracker;