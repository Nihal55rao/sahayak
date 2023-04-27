import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import { Link } from "react-router-dom";
import moment from "moment";
import Linechart from "../components/Linechart/Linechart";
import { useNavigate } from "react-router-dom";
import React, { useEffect } from "react";
import DoctorProfile from "../DoctorProfile/DoctorProfile";
import HomeFooter from "../components/HomeFooter/HomeFooter";



function Home () {
    
    // let user = JSON.stringify(sessionStorage.getItem('id','name'))
    let user2 = localStorage.getItem('name2')
    let id2 = localStorage.getItem('id')
    
    return(
        <>
        <Navbar/>
        <div className="hero">
        
        <img alt="HeroImg" src="https://www.abim.org/Media/y5sdjyld/moc_deferred.jpg"/>
        <div className="hero-text">
            <h1>
                Welcome
            </h1>
        
            {user2 ? <p>{user2} </p>:<p>h1</p>}

            <p1>Appointments : </p1><br/>
            <p3 style={{color: "rgb(16, 154, 223)"}}><b>{moment().format("MMMM Do YYYY, h:mm:ss a")}</b></p3>
            {/* <a href={props.url} className={props.btnClass}>{props.buttonText}</a> */}
        </div>

        </div>
        <Linechart/>
        <DoctorProfile/>
        <HomeFooter/>

        </>
    )
}

export default Home;