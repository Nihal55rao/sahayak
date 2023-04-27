import Navbar from "../components/Navbar"
// import HospitalRegister from "../components/HospitalRegister/HospitalRegister"
import HosRegister from "../components/HosRegister/HosRegister"
import HomeFooter from "../components/HomeFooter/HomeFooter";

function HospitalTimings () {
    return(
        <>
        <Navbar/>
        {/* <HospitalRegister/> */}
        <HosRegister/>
        <HomeFooter/>
        </>
    )
}

export default HospitalTimings;