import axios from "axios";



import { useState, useEffect } from 'react';
import background from '../assets/back6.png'
import './HosRegister.css'


export default function HosReg() {
    const [file,setFile] = useState("");
    const [name,setName] = useState("");
    const [description,setDescription] = useState("");
    const [address,setAddress] = useState("");
    // const [name,setName] = useState("");

    const [St, setSt]= useState([]);
    const [Stateid, setStateid]= useState('');
    const [city, setCity] = useState([]);


 async  function addHospital(){
        console.warn(file,name,description,address,St,Stateid,city)
        // const formData = new FormData();
        // formData.append('file',file);
        // formData.append('name',name);
        // formData.append('description',description);
        // formData.append('St',St);
        // formData.append('Stateid',Stateid);
        // formData.append('city',city);
        // let result = await fetch("http://192.168.29.50:8080/hospital",{
        //     method:'POST',
        //     body: formData
        // });

        alert("Data has been saved")

    }

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
            
            // const getcity= async()=>{
            //     const rescity =await fetch(`http://localhost:8080/city/${Stateid}`);
            //     const rcity = rescity.json();
            //     setCity(await rcity);
            // }
            // getcity();
        },[Stateid]);


   
    
    return (
        <div className="col-sm-6 offset-sm-3" style={{ 
            backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat" ,
                marginTop: "3rem",
          }}>
            <br/>
            <br/>
            <div className='card'>
                <h1>Update Hospital Details</h1>
            <div className='input'>
            Image:  <input type="file" className="form-control" onChange={(e)=>setFile(e.target.files[0])} placeholder="file"/> <br/>
            Hospital Name:     <input type="text" className="form-control" onChange={(e)=>setName(e.target.value)} placeholder="  hospital name"/> <br/>
           
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
            City: <select name='city' className='form-cotrol'>
                <option value="">--Select City--</option>
            {
                city.map( (gcity, index)=>(
                    <option key={index} value={gcity.id}>{gcity.city_name}</option>
                    
                ))
            }
            </select>
            <br/><br/>

            Description:  <textarea type="text" className="form-control" onChange={(e)=>setDescription(e.target.value)} placeholder="description"/> <br/>
            </div>
            
            <button type="submit" onClick={addHospital} className="btn">Update</button>
            </div>
        </div>
    )
}