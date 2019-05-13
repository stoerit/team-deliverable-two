import React from 'react';

import './App.css';

function Header(){
    return(
        <div className="slider-text">
            <div id="slideshow">
                <div>
                    <img src='./assets/css/images/city.jpg' style={imgStyle} alt="city" />
                    <div className="centered">Forbes 2018 Global 2000: Top 7 Companies</div>
                </div>
                <div>
                    <img src="./assets/css/images/world.jpg" style={imgStyle} alt="world" />
                    <div className="centered">Forbes 2018 Global 2000: Top 7 Companies</div>
                </div>
                <div>
                    <img src="./assets/css/images/tech.jpg" style={imgStyle} alt="tech" />
                    <div className="centered">Forbes 2018 Global 2000: Top 7 Companies</div>
                </div>
            </div>
        </div>
    )
}

const imgStyle = {
    height: '400px',
    width: '100%'
}

export default Header