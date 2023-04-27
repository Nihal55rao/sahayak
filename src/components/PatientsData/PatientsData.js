import React, { useEffect, useState } from "react";
import background from '../../assets/back4.png'
import styles from "./PatientsData.css";
import {Table} from 'react-bootstrap'
import axios from "axios";

function PatientsData(){
    let hosid = localStorage.getItem('id')
    const [data,setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/appointments/hospitalAppointment/"+hosid)
        .then((res) => 
        
            setData(res.data.data)
   
        );
    },[])
    
    

    return(
        <div className="page" style={{ 
            backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat" ,
                backgroundSize: "cover",
            
          }}>
            <h1>Patient Data</h1>
            <Table  style={{marginLeft:"5%",width:"80%"}}>
                <tbody>
                <tr>
                    <td>id</td>
                    <td>PatientName:</td>
                    <td>PatientPhnumber:</td>
                    <td>PatientEmail:</td>
                    <td>AppointDate:</td>
                    <td>Patient Age</td>
                    <td>Patient Disease</td>
                </tr>
                </tbody>
                {
                    data.map((item)=>
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.patient_name}</td>
                    <td>{item.patient_phone}</td>
                    <td></td>
                    <td>{item.appointment_date}</td>
                    <td></td>
                    <td></td>
                </tr>
                    )
                }
            </Table>

            

        </div>
        
       

    )
}

export default PatientsData;