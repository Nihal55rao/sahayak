import  Axios from 'axios';
import { useState, useEffect } from 'react';
import background from '../../assets/back6.png'
import './DocRegister.css'



export default function DocRegister() {
    const [first_name,setFirstName] = useState('');
    const [last_name,setLastName] = useState('');
    const [full_name,setFullName] = useState('');
    const [specialization,setSpecialization] = useState('');
    const [experience,setExperience] = useState('');
    const [education,setEducation] = useState('');
    const [price,setPrice] = useState('');
    const [average_consultation_time,setAverage_consultation_time] = useState('');
    const [ hospital_id,setHospital_id] = useState('');

    let id2 = localStorage.getItem('id')

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post("http://localhost:8080/doctor",{
            first_name,
            last_name,
            full_name,
            specialization,
            experience,
            education,
            price,
            average_consultation_time,
            hospital_id : id2
        })
        .then((response) => {
            console.log(response)
        }).catch((error) => {
            console.log(error);
        })
        alert("Doctor Profile Created Successfully")
    }
    
    

    // const [file,setFileDoc] = useState("");
    // const [first_name,setFirstName] = useState("");
    // const [last_name,setLastName] = useState("");
    // const [full_name,setFullName] = useState("");
    // const [specialization,setSpecialization] = useState("");
    // const [experience,setExperience] = useState("");
    // const [education,setEducation] = useState("");
    // const [average_consultation_time,setAverage_consultation_time] = useState("");
    // const [price,setPrice] = useState("");
    // const [hospital_id,setHospital_id] = useState("");
    

   

// async   function addDoctor(){
//         console.warn(first_name,last_name,full_name,specialization,experience,education,price,average_consultation_time,hospital_id)
//         const formData = new FormData();


//         // formData.append('file',file);
//         formData.append('first_name',first_name);
//         formData.append('last_name',last_name);
//         formData.append('full_name',full_name);
//         formData.append('specialization',specialization);
//         formData.append('experience',experience);
//         formData.append('education',education);
//         formData.append('average_consultation_time',average_consultation_time);
//         formData.append('price',price);
//         formData.append('hospital_id',hospital_id);
//         axios.post(`http://localhost:8080/doctor`).then(
//             res => addDoctor(res)
//         )
//         // let result = await fetch("http://192.168.29.50:8080/doctor",{
//         //     method:'POST',
//         //     body: formData
//         // });
//         alert("Data has been saved")
//     }

   
    const margin = { margin: "0 5px" }
    return (
        <div className="col-sm-6 offset-sm-3" style={{ 
            backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat" ,
                marginTop: "3rem",
          }}>
            <br/>
            <br/>
            <form onSubmit={handleSubmit}>
            <div className='card'>
                <h1>Create Doctor Profile</h1>
            <div className='input' >
            {/* Image:  <input type="file" className="form-control" value={file} onChange={(e)=> setFileDoc(e.target.files[0])} placeholder="file"/> <br/> */}
            First Name:     <input type="text" name="first_name" className="form-control" value={first_name} onChange={(e)=> setFirstName(e.target.value)}  placeholder="  first name"/> <br/>
            Last Name:     <input type="text" name='last_name' className="form-control" value={last_name} onChange={(e)=> setLastName(e.target.value)} placeholder="  last name"/> <br/>
            Full Name:     <input type="text" name='full_name' className="form-control"  value={full_name} onChange={(e)=> setFullName(e.target.value)} placeholder="  full name"/> <br/>
            Specialization:   <input type="text" name='specialization' className="form-control" value={specialization} onChange={(e)=> setSpecialization(e.target.value)}  placeholder="  specialization"/> <br/>
            Experience:   <input type="number" name='experience'  className="form-control" value={experience} onChange={(e)=> setExperience(e.target.value)}   placeholder="  experience"/> <br/>
            Qualification:   <input type="text" name='education' className="form-control" value={education} onChange={(e)=> setEducation(e.target.value)}  placeholder="  qualification"/> <br/>
            Fee:   <input type="number" name='price' className="form-control"  value={price} onChange={(e)=> setPrice(e.target.value)}  placeholder="  fee"/> <br/>
            Avg_consultationtime:  <input type="text" name='average_consultation_time' className="form-control" value={average_consultation_time} onChange={(e)=> setAverage_consultation_time(e.target.value)}  placeholder="  time in minutes"/> <br/><br/>
            <button type='submit' onClick={handleSubmit} className="btn">Submit</button>
            </div>
           
            </div>
            </form>
        </div>
    )
}