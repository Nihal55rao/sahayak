import React, { useState , useEffect} from "react";
import { Link,} from "react-router-dom";
import {FaHandsHelping} from 'react-icons/fa'
import axios from "axios";
import { useNavigate } from 'react-router-dom';


import InputControl from "../InputControl/InputControl";
import background from '../../assets/back5.png'

import styles from "./Signup.module.css";

function Register() {
  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [file,setFile] = useState("");
  const [description,setDescription] = useState("");
  const [address,setAddress] = useState("");
  const [St, setSt]= useState([]);
  const [Stateid, setStateid]= useState('');
  const [city, setCity] = useState([]);
  const [Cityid, setCityid]= useState('');
  const navigate = useNavigate();
    

async  function Signup(){
  axios.post("http://localhost:8080/api/hospital/hospital",{
      name,
      email,
      password,
      file,
      description,
      address,
      St,
      Stateid,
      city,
      Cityid
  })
  .then((response) => {
      console.log(response)
      localStorage.setItem("user-info",JSON.stringify(response))
    navigate('/signup');
  }).catch((error) => {
      console.log(error);
  })
  
  alert("Data has been saved")
}

  //   let item={name,email,password,file,description,address,St,Stateid,city,Cityid}
  //   console.warn(item)

  //   let result = await fetch("http://localhost:8080/hospital",{
  //     method: 'POST',
  //     body:JSON.stringify(item),
  //     headers:{
  //       "Content-Type":"application/json",
  //       "Accept":'application/json'
  //     }
  //   })
  //   result = await result.json()
  //   localStorage.setItem("user-info",JSON.stringify(result))
  //   navigate('/home');

  //   alert("Data has been saved")
  // }

  useEffect( ()=> {
    axios.get('/state').then(
        res => setSt(res.data.data)
    )



},[]);

const handlestate = (event) =>{
    const getstateid= event.target.value;
    setStateid(getstateid);
}

useEffect( ()=>{
    axios.get(`/city/${Stateid}`).then(
        res => setCity(res.data.data)
    )
    
   
},[Stateid]);
const handlecity = (event) =>{
  const getcityid= event.target.value;
  setCityid(getcityid);
}



  return ( 
    <div className={styles.container} style={{ 
      backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat" ,
          backgroundSize: "cover",
    }}>
      <form onSubmit={Signup}>
      <div className={styles.innerBox}>
      <h1><FaHandsHelping className="navbar-logo"/>Sahayak</h1>
        <h2 className={styles.heading}>Signup</h2>

        <InputControl
          label="Hospital Name"
          type="text"
          placeholder="Enter hospital name"
          value = {name}
          onChange={(e) =>
            setName(e.target.value) 
          }
        />
        <InputControl
          label="Email"
          type = "text"
          placeholder="Enter Email"
          value = {email}
          onChange={(e) =>
            setEmail(e.target.value) 
          }
        />
        <InputControl
          label="Password"
          type="password"
          placeholder="Enter Password"
          value = {password}
          onChange={(e) =>
            setPassword(e.target.value) 
          }
        />
        <div className='input'>
            Image:  <input type="file" className="form-control" onChange={(e)=>setFile(e.target.files[0])} placeholder="file"/> <br/>
            Address:&nbsp;&nbsp; <input type="text" className="form-control" onChange={(e)=>setAddress(e.target.value)} placeholder="  address"/> <br/>
            State:&nbsp; <select name='state' className='form-cotrol' onChange={(e)=>handlestate(e)}>
                <option value="">--Select State--</option>
            {
                St.map( (getst, index)=>(
                    <option key={index} value={getst.id}>{getst.stateName}</option>
                    
                ))
            }
           
            </select>
            &nbsp;&nbsp;
            City: <select name='city' className='form-cotrol' onChange={(e) =>handlecity(e)}>
                <option value="">--Select City--</option>
            {
                city.map( (getcity, index)=>(
                    <option key={index} value={getcity.id}>{getcity.city_name}</option>
                    
                ))
            }
            </select>
            <br/><br/>

            Description:  <textarea type="text" className="form-control" onChange={(e)=>setDescription(e.target.value)} placeholder="description"/> <br/>
            </div>

        <div className={styles.footer}>

          <button onClick={Signup} type="submit">
            Signup
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
      </form>
    </div>




  );
}

export default Register;