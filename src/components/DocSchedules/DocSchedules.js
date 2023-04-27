import { Grid } from "@material-ui/core";
import axios from "axios";
import React,{useState, useEffect} from "react";
import { Navbar, Table } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import background from '../../assets/back1.png';
import { useParams } from "react-router-dom"; 


import './DocSchedule.css';



function DocSchedules(props) {
        let {id} = useParams();

        const [Data,setData] = useState([]);
        const [Docdata,setDocdata] = useState([]);
    
    
        const [date, setDate] = useState([]);
        
        const [appointment_date,setAppdate] = useState([]);
        const [appointment_date_id,setAppdateid] = useState('');
        const [appointment_start_time,setStart] = useState('');
        const [appointment_end_time,setEnd] = useState('');
        const [hour,setHour] = useState('');
        const [min,setMin] = useState('');

        const [approximate_turn_time, setAxtime]= useState([]);
        const [approximate_turn_time_id, setAxtid]= useState('');
        const [slot_start, setSlstart] = useState([]);
        const [slot_end, setSlend] = useState([]);
        

        useEffect( ()=> {
            axios.get('http://localhost:8080/doctorTimeSlot?doctor_id='+id+"&date="+appointment_date).then(
                res => console.log(res.data.data)
            )



        },[appointment_date_id]);
        const handlestate = (event) =>{
            const getapproximate_turn_time_id= event.target.value;
            setAxtid(getapproximate_turn_time_id);
        }

        const handleSubmit =(e) => {
            e.preventDefault();
            axios.post("http://localhost:8080/api/appointments/pushAppointment/"+id+"?appointment_date="+appointment_date+"&appointment_start_time="+appointment_start_time+"&appointment_end_time="+appointment_end_time+"&hour="+hour+"&min="+min,{
                appointment_date,appointment_start_time,appointment_end_time,hour,min
            })
            .then((res) => {
                console.log(res.data.data);

            }).catch((error) => {
                console.log(error);
            })
            alert("Appointment Pushed Successfully")
        };

        useEffect(() => {
            axios.get("http://localhost:8080/doctorSchedule/"+id)
            .then((res) => 
            
                 setData(res.data.data.schedule)
       
            );
        },[])

        useEffect(() => {
            axios.get("http://localhost:8080/doctorSchedule/"+id)
            .then((res) => 
            
                 setDocdata(res.data.data.doctor)
       
            );
        },[])
    

        
    return(
        <>
        
        <div className="profiles" style={{ 
            backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat" ,
                backgroundSize: "cover",
                
          }}>
            <form onSubmit={handleSubmit}>
            
            <h1>Doctor Schedule</h1>
            <h1>{Docdata.full_name}</h1>
            <div>
            
            <div className='card' style={{marginBottom: "2rem"}}>
                <h1>Create Doctor Schedule</h1>
            <div className='input'>
    
            Available Day:     <input type="date" className="form-control" value={appointment_date} onChange={(e) => setAppdate(e.target.value)} /> <br/>
            Leave Day:     <input type="date" className="form-control" value={appointment_date} onChange={(e) => setAppdate(e.target.value)} /> <br/>
          
            
            Appointment StartTime:&nbsp;&nbsp; <select type="time" className="form-control" value={appointment_start_time} onChange={(e) => setStart(e.target.value)} > <br/>
            <option value="">--Select Day--</option>
            <option value="someOption">Monday</option>
            <option value="otherOption">Tuesday</option>
            <option value="otherOption">Wednesday</option>
            <option value="otherOption">Thursday</option>
            <option value="otherOption">Friday</option>
            <option value="otherOption">Saturday</option>
            <option value="otherOption">Sunday</option>
            </select>
            </div>
            Start Time:     <input type="time" className="form-control" value={appointment_date} onChange={(e) => setAppdate(e.target.value)} /> <br/>
            <br/>
            End Time:     <input type="time" className="form-control" value={appointment_date} onChange={(e) => setAppdate(e.target.value)} /> <br/><br/>
            <button type="submit"  className="btn">Create</button>
            </div>
        </div>
        </form><br/>

        <form onSubmit={handleSubmit}>
            
            <div>
            
            <div className='card' style={{marginBottom: "2rem"}}>
                <h1>Push Appointments</h1>
            <div className='input'>
    
            Appointment Date:     <input type="date" className="form-control" value={appointment_date} onChange={(e) => setAppdate(e.target.value)} /> <br/>
           Aprox-TurnTime:&nbsp;&nbsp; <input name='axtime' type="time" className='form-cotrol' value={approximate_turn_time} onChange={(e)=>setAxtime(e.target.value)}/><br/>
            
            Appointment StartTime:&nbsp;&nbsp; <input type="time" className="form-control" value={appointment_start_time} onChange={(e) => setStart(e.target.value)} /> <br/>
            Appointment EndTime:&nbsp;&nbsp; <input type="time" className="form-control" value={appointment_end_time} onChange={(e) => setEnd(e.target.value)} /> <br/>

            Hour:  <input type="number" className="form-control" max="24" value={hour} onChange={(e) => setHour(e.target.value)} placeholder="hours"/> <br/>
            minutes:  <input type="number" className="form-control" max="60" value={min} onChange={(e) => setMin(e.target.value)} placeholder="minutes"/> <br/>
            </div>
            
            <button type="submit"  className="btn">Push</button>
            </div>
        </div>
        </form><br/>

            <Table variant="dark" striped style={{ width: "90%", marginLeft: "5%", backgroundColor:"lightgray"}}>
                <tbody>
                    <tr>
                    <td style={{fontWeight:"700",backgroundColor:"lightgrey"}}>Available Days</td>
                    <td style={{fontWeight:"700",backgroundColor:"lightgray"}}>Leave Days</td>
                    <td style={{fontWeight:"700",backgroundColor:"lightgray"}}>Week Schedule</td>
                    </tr>
                </tbody>
                {
                    Data.map((item) =>
                    <tr style={{backgroundColor:"lightgray"}}>
                    <td style={{backgroundColor:"lightgray", padding: "0"}} >{
                        item.available_days.map((data)=>
                        <tr>
                            <td >{data}</td>
                        </tr>
                        )
                        }<br/></td>
                    <td style={{backgroundColor:"lightgray",padding: "0"}}>{
                        item.leave_days.map((data) =>
                        <tr>
                            <td >{data}</td>
                            
                        </tr>
                        )
                        
                        }<br/></td>
                        <td>
                     <tbody>
                    <tr>
                    <td style={{fontWeight:"700",backgroundColor:"lightgrey",padding: "2px"}}>Monday</td>
                    <td style={{fontWeight:"700",backgroundColor:"lightgray",padding: "2px"}}>Tuesday</td>
                    <td style={{fontWeight:"700",backgroundColor:"lightgray",padding: "2px"}}>Wednesday</td>
                    <td style={{fontWeight:"700",backgroundColor:"lightgrey",padding: "2px"}}>Thursday</td>
                    <td style={{fontWeight:"700",backgroundColor:"lightgray",padding: "2px"}}>Friday</td>
                    <td style={{fontWeight:"700",backgroundColor:"lightgray",padding: "2px"}}>Saturday</td>
                    <td style={{fontWeight:"700",backgroundColor:"lightgray",padding: "2px"}}>Sunday</td>
                    </tr>
                </tbody>
                
                {
                <tr>
                    {
                
                        Object.values(item.week_schedule).map((data) => 
                            
                                <td style={{fontWeight:"600",backgroundColor:"lightgray",padding: "0"}}>{
                                    data.map((element) => 
                                    <tr>
                                        <td>{element}</td>
                                    </tr>
                                    )
                                    }</td>
                            
                        )
                    }<br/>
                </tr>

                
                }
                
                </td>
                    </tr>

                
                    )
                }
            </Table>
            
    </div>
    </>
           
    )


}

export default DocSchedules;