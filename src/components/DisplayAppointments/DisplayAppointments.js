import React, { useEffect, useState } from "react";
import background from '../../assets/back4.png'
import styles from "./DisplayAppointments.css";
import {Table} from 'react-bootstrap'
import axios from "axios";

function DisplayAppointments(){
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
            <h1>Appointment List</h1>
            <Table style={{marginLeft:"5%",width:"80%", border: "1px solid black"}}>
                <tbody>
                <tr>
                    <td>id</td>
                    <td>PatientName:</td>
                    <td>PatientPhnumber:</td>
                    <td>DoctorName</td>
                    <td>AppointDate:</td>
                    <td>AppointTime:</td>
                    <td>Schedule:</td>
                </tr>
                </tbody>
                {
                    data.map((item)=>
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.patient_name}</td>
                    <td>{item.patient_phone}</td>
                    <td>{item.doctor_name}</td>
                    <td>{item.appointment_date}</td>
                    <td>{item.appointment_start_time}</td>
                    <td>{item.date_of_appointment}</td>
                </tr>
                    )
                }
            </Table>

            

        </div>
        
       

    )
}

export default DisplayAppointments;