import React from "react";
import background from '../../assets/back4.png'
import styles from "./HomeFooter.css";

function HomeFooter(){
    let state1 = localStorage.getItem('statee')
    let city1 = localStorage.getItem('cityy')
    let pincode1 = localStorage.getItem('pincode')
    let area1 = localStorage.getItem('area')
    let street1 = localStorage.getItem('street')
    let description1 = localStorage.getItem('description')

    return(
        <div className="footer" style={{ 
            backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat" ,
                backgroundSize: "cover",
          }}>
            <h1>Hospital Details</h1><br/>
            <h2>Address</h2>
            <h3>{state1}, {city1}, {area1}, {street1},{pincode1}</h3><br/>
            <h2>Description</h2>
            <p>{description1}</p>

        </div>
        
       

    )
}

export default HomeFooter;