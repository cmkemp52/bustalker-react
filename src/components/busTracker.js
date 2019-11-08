import React, {Component} from 'react';
import {loadData} from "../utils/loadData";
import BusMap from './busMap';
import BusChart from './busChart';
import Tweets from './twitterEmbed';

class BusTracker extends Component{
    state = {
        busLoc: null,
        userLoc: null
    }
    componentDidMount(){
        this.requestLocation();
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
    requestLocation=()=>{
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(user=>{
                this.setState({
                    userLoc: [user.coords.latitude, user.coords.longitude]
                })
            })
        }
    }

    render(){
        return(
            <>
            <div id="trackerPage">
                {this.state.busLoc ? <BusMap busLoc={this.state.busLoc} userLoc={this.state.userLoc}/> : ""}
                <div id="tweets">
                    {this.state.busLoc ? <BusChart busLoc={this.state.busLoc}/> : ""}
                    <Tweets/>
                </div>
            </div>
            <div className="split2" id="split2"></div>
            </>
        )
    }
}

export default BusTracker;