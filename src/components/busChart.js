import React, {Component} from 'react';
import CanvasJSReact from '../assets/canvasjs.react';

const CanvasJS = CanvasJSReact.CanvasJS;
const CanvasJSChart = CanvasJSReact.CanvasJSChart;
CanvasJS.addColorSet("martaColors",["#0092D0","#FDBE43","#FF7500"]);

class BusChart extends Component{
    state={
        busOnTimePercent:34,
        busEarlyPercent:33,
        busLatePercent:33
    }
    
    componentDidMount(){
        let busLate = 0;
        let busEarly = 0;
        let busOnTime = 0;
        this.props.busLoc.map((bus)=>{
            if(bus.ADHERENCE >0){
                busLate++;
            }
            if(bus.ADHERENCE <0){
                busEarly++;
            }
            if(bus.ADHERENCE === "0"){
                busOnTime++;
            }
            return "";
        })
        const busLatePercent = (busLate/(busLate+busEarly+busOnTime))*100;
        const busEarlyPercent = (busEarly/(busLate+busEarly+busOnTime))*100;
        const busOnTimePercent = (busOnTime/(busLate+busEarly+busOnTime))*100;
        this.setState({
            busLatePercent,
            busEarlyPercent,
            busOnTimePercent
        })
    }



    render(){
    const options = {
        animationEnabled: true,
        colorSet: 'martaColors',
        backgroundColor: "#396073",
        title: {
            fontColor:"white",
            text: "MARTA By the Minute"
        },
        data: [{
            indexLabelFontColor: "white",
            type: "pie",
            startAngle:  240,
            yValueFormatString: "##0.00\"%\"",
            indexLabel: "{label} {y}%",
            dataPoints: [
                {y: this.state.busLatePercent, label: "Late Buses"},
                {y: this.state.busEarlyPercent, label: "Early Buses"},
                {y: this.state.busOnTimePercent, label: "On Time Buses"}
            ]
        }]
    }
        return(
            <CanvasJSChart options = {options} />
        )
    }
}

export default BusChart;