import "./HeroStyles.css"
// import React, { useState , useEffect} from "react";
// import axios from "axios";

function Hero (props) {
    return(
        <>
        <div className="hero">
        
        <img alt="HeroImg" src="https://www.abim.org/Media/y5sdjyld/moc_deferred.jpg"/>
        <div className="hero-text">
            <h1>
                Welcome
            </h1>
            <p>{props.name ? `Sahayak  ${props.name}` : "  Sahayak"}</p>
        </div>

        </div>
        </>
    )
}

export default Hero;