import Navbar from "../components/Navbar"
// import PhoneInput from 'react-phone-number-input'
// import Doctor from "../components/Doctor";
// import DoctorRegister from "../components/DoctorRegister/DoctorRegister";
import background from '../assets/back7.png'
import DocRegister from "../components/DocRegister/DocRegister";
import Linechart from "../components/Linechart/Linechart";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DoctorProfile from "../DoctorProfile/DoctorProfile";

function DoctorDetails () {
    return(
        <>
        <Navbar/>
        <DocRegister/>
        <DoctorProfile/>
        <div style={{backgroundImage: `url(${background})`, backgroundSize: "cover",
                backgroundRepeat: "no-repeat" ,}}><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
        <p style={{backgroundImage: "https://www.softwaresuggest.com/blog/wp-content/uploads/2020/12/Best-Software-for-Doctors-to-Manage-their-Practice.png"}}> We have best Doctors</p>
        </div>
        </>
    )
}

export default DoctorDetails;