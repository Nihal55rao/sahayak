import React from "react";
import'./home.css'
// import {BsFillTelephoneFill} from 'react-icons/bs'

import video from '../../assets/websiteVideo.mp4'




const Home = (props)=>{

    return(
        <section className="home">
            <div className="overlay"></div>
            <video src={video} muted autoPlay loop 
            type="video/mp4"></video>

            <div className="homeContent container">
                <div className="textDiv">
                <h1 className="homeTitle">Welcome!!</h1>
                    <span className="smallText">
                    {props.name ? `Welcome - ${props.name}` : "  Sahayak"}
                    </span>
                    
                

            </div>
            </div>
        </section>
    )
}

export default Home