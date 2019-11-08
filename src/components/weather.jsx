import React, { Component } from 'react';
import { loadData } from '../utils/loadData';
import Sun from '../assets/weather-icons/sunny.png';
import Moon from '../assets/weather-icons/sunny.png';
import Rain from '../assets/weather-icons/rain.png';
import Snow from '../assets/weather-icons/snow.png';
import Sleet from '../assets/weather-icons/hail.png';
import Wind from '../assets/weather-icons/wind.png';
import Fog from '../assets/weather-icons/foggy.png';
import Cloudy from '../assets/weather-icons/cloudy.png';


class Weather extends Component {
    state = {
        weather: [],
    }

    async componentDidMount() {
        const weather = await loadData(
            `https://api.darksky.net/forecast/1010d61071e3e5e3e99eed847a82272c/33.7490,-84.3880`
        );
        console.log(weather);
        this.setState({
            weather,
        })
    }

    
    
    render() {
        const { weather } = this.state;
        let temp = weather.currently ? weather.currently.temperature.toFixed(0) : null;
        let precip = weather.currently ? weather.currently.precipProbability : null;
        function currentWeather() {
        let iconImage = weather.minutely ? weather.minutely.icon : 'Fetching Icon...';
        switch (iconImage){
            case('clear-day'):
                iconImage = Sun;
                break;
            case('clear-night'):
                iconImage = Moon;
                break;
            case('rain'):
                iconImage = Rain;
                break;
            case('snow'):
                iconImage = Snow;
                break;
            case('sleet'):
                iconImage = Sleet;
                break;
            case('wind'):
                iconImage = Wind;
                break;
            case('fog'):
                iconImage = Fog;
                break;
            case('cloudy'):
                iconImage = Cloudy;
                break;
            default: 
                iconImage = 'clear-day';
                break;
        }
       return iconImage;
    }
            return (
                <div className="Card">
                    <h1>Atlanta, Ga</h1>
                    <p>Temp:{temp}˚F</p>
                    <p>Chance of Rain: {precip * 100}%</p>
                    <img src={currentWeather()} alt={weather.minutely ? weather.minutely.icon : 'Fetching...'} />
                </div>
            );
        }
}

export default Weather;