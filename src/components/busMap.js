import React, {Component} from "react";
import { Map, TileLayer, Marker, Popup} from 'react-leaflet'
import Leaflet from 'leaflet';

class BusMap extends Component{
    componentDidMount(){
        console.log("props are ", this.props.busLoc);
    }
    render(){
        const nIcon = Leaflet.icon({iconUrl:"images/busnorth.png",iconSize:[50,50],iconAnchor:[25,25],popupAnchor:[0,-10]}),
            sIcon = Leaflet.icon({iconUrl:"images/bussouth.png",iconSize:[50,50],iconAnchor:[25,25],popupAnchor:[0,-10]}),
            eIcon = Leaflet.icon({iconUrl:"images/buseast.png",iconSize:[50,50],iconAnchor:[25,25],popupAnchor:[0,-10]}),
            wIcon = Leaflet.icon({iconUrl:"images/buswest.png",iconSize:[50,50],iconAnchor:[25,25],popupAnchor:[0,-10]});
        const position = [33.75, -84.38];
        return(
            <Map center={position} zoom={12} id="mapDiv">
                <TileLayer
                    url='https://api.tiles.mapbox.com/v4/mapbox.streets/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiY21rZW1wNTIiLCJhIjoiY2sxN3czcWZ0MWw4aDNicWQ5ZGk3ZGRiciJ9.TmrrAvuGokXxLMhoa96krg'
                />
            {this.props.busLoc.map((bus)=>{
                return(
                    <Marker position={[bus.LATITUDE, bus.LONGITUDE]} key={bus.VEHICLE} 
                    icon={bus.DIRECTION === "Northbound" ? nIcon : bus.DIRECTION === "Southbound" ? sIcon :
                    bus.DIRECTION === "Eastbound" ? eIcon : wIcon}>
                        <Popup>
                            {bus.ADHERENCE > 0 ?
                                `Bus Rt: ${bus.ROUTE} Bus ID:${bus.VEHICLE} Currently ${bus.ADHERENCE} minute(s) ahead of schedule` :
                            bus.ADHERENCE < 0 ?
                                `Bus Rt: ${bus.ROUTE} Bus ID:${bus.VEHICLE} Currently ${Math.abs(bus.ADHERENCE)} minute(s) behind schedule` :
                                `Bus Rt: ${bus.ROUTE} Bus ID:${bus.VEHICLE} Currently on schedule` }
                        </Popup>
                    </Marker>
                );
            })}
            </Map>
        )
    }
}

export default BusMap;