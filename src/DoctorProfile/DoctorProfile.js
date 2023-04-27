import { Card, Grid } from "@material-ui/core";
import axios from "axios";
import React,{useState, useEffect} from "react";
import { Table } from "react-bootstrap";
import { Link, Router, useNavigate } from "react-router-dom";
import background from '../assets/back1.png';
import DocSchedules from "../components/DocSchedules/DocSchedules";


import './DoctorProfile.css';


function DoctorProfile (){
    const navigate = useNavigate();
    let id2 = localStorage.getItem('id')
    const [myData,setMyData] = useState([]);
    
    
    
    useEffect(() => {
        axios.get("http://localhost:8080/hospitalDoctor/"+id2)
        .then((res) => 
            setMyData(res.data.data)
            
        );
        
    },[]);


    return(
        <>
        <div className="profiles" style={{ 
            backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat" ,
                backgroundSize: "cover",
                
          }}>
            <h1>Doctors Profiles</h1>
            <div className="grid">
            {myData.map((post)=>{
                const { full_name, specialization, experience, education, average_consultation_time, price} = post;
               
    
                
                return( 
                   
                <div className="card" key={full_name}>
                    <h2>Name: {full_name}</h2>
                    <p>Specialization :{specialization}</p>
                    <p>Experience :  {experience}</p>
                    <p>Qualification : {education}</p>
                    <p>Avg-consulting-time : {average_consultation_time}</p>
                    <p>Fee: {price}</p>
                    
                    
                    <Link  to={"/schedule/"+post.id} className="btn">Schedule</Link>
                    
                </div>
                
                )
            })};
            </div>
        </div>
        
        </>
    );
}

export default DoctorProfile