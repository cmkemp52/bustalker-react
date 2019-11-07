import React, { Component } from 'react';
import Weather from './weather';



class Home extends Component {
    

    
    render() {
            return (
                <>
                <div className='home-background'>
                    <div className= "container" id="welcome">
                        <div className="welcomeContainer">
                            <div id="weatherDiv" data-weather className="container--weather">
            
                                    <div>
                                        <div id="stats">
                                            <Weather />
                                    </div>
                                    <div id="iconStatus"></div>
                                </div>
                            </div>
                                <div className="about">
                                    <h1><b>Bus Talker</b></h1>
                                    <p>Instant Marta Bus and Rail Tracking</p>
                                    <hr></hr>
                                    <a href="#split1"><p><button><b>Start Tracking</b></button></p></a>
                                </div>
                            </div>
                        </div>
                    </div>
                <div className="split1" id="split1"></div>
            </>
        );
    }
}
    

export default Home;