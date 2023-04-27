import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {FaHandsHelping} from 'react-icons/fa'
// import { signInWithEmailAndPassword } from "firebase/auth";
import background from '../../assets/back3.png'
import  { toast} from "react-toastify"
import InputControl from "../InputControl/InputControl";
// import { auth } from "../../firebase";

import styles from "./Login.module.css";

function Login() {
  // useEffect(() => {
  //   if(localStorage.getItem('id'))
  //     navigate.push("/login")
    
      
  
  // },[]);

  
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword] =useState("");
  
  
  const login = (e) => {
    e.preventDefault();
    if(validate()){
      fetch("http://localhost:8080/api/hospital/hospitalLogin?email="+email+"&password="+password).then((res) =>{
        return res.json();
      }).then((resp)=>{
        console.log(resp.data)
        if(Object.keys(resp.data.email).length===0){
          alert('Enter valid user');
        }else{
          if(resp.data.password === password){

            localStorage.setItem("name2",(resp.data.hospital_name))
            localStorage.setItem("id",(resp.data.id))
            localStorage.setItem("description",(resp.data.description))
            localStorage.setItem("state",(resp.data.address.state_name))
            localStorage.setItem("city",(resp.data.address.city_name))
            localStorage.setItem("pincode",(resp.data.address.pincode))
            localStorage.setItem("area",(resp.data.address.area))
            localStorage.setItem("street",(resp.data.address.street))
            
              navigate('/')
          }else{
            alert('Please Enter valid username');
          }
        }
      }).catch((err)=>{
        alert('LogIn failed');
      });
    }
   

  }
  
  const validate=()=>{
    let result = true;
    if (email ==='' || email === null){
      result = false;
      alert('Please Enter Email');
    }
    if (password ==='' || password === null){
      result = false;
      alert('Please Enter Password');
    }
    return result;
  }
 
  
  
  return (
    <div className={styles.container} style={{ 
      backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat" ,
          backgroundSize: "cover",
    }}>
      <div className={styles.innerBox}>
      <h1><FaHandsHelping className="navbar-logo"/>Sahayak</h1>
        
        <h2 className={styles.heading}>Login</h2>

        <InputControl
          label="Email"
          value={email}
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email address"
        />
        <InputControl
          label="Password"
          value = {password}
          type="password"
        onChange={(e) => setPassword(e.target.value)}
          
          placeholder="Enter Password"
        />

        <div className={styles.footer}>
          
          <button  onClick={login}>
            Login
          </button>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/signup">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;