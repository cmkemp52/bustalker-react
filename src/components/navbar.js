import React from 'react';

const navBar = () =>{
    return(
        <nav>
            <div id="navbarNav">
            <img id="navlogo" src="./images/bustalker.png" alt="logo"/> 
                <ul id="navLinks">
                    <li>
                        <a href="#top">Home </a>
                    </li>
                    <li>
                        <a href="#split1">Tracker</a>
                    </li>
                    <li>
                        <a href="#split2">Trains</a>
                    </li>
                    <li>
                        <a href="#split3">Routes</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default navBar;