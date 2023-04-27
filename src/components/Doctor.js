// import PhoneInput from 'react-phone-number-input'
import "../components/doctorsdetails.css"
// import { MenuItems } from "./Menuitems";

function Doctor () {
    return(
        <section className="home">
        <div className="cardDiv grid">
                    <div className="DoctorData">
                        <h1>Book An Appointment Now</h1>
                    </div>

                    <div className="DoctorName">
                        <label htmlFor="Book An Appointment Now">Doctor Name:</label>
                        <div className="input">
                            <input type="text" placeholder=" Doctor name..."  />
                        </div>
                    </div>


                    <div className="DoctorQualification">
                        <label htmlFor="Book An Appointment Now">Qualification:</label>
                        <div className="input">
                            <input type="text" placeholder=" Qualification..."  />
                        </div>
                    </div>

                    <div className="DoctorSpecialization">
                        <label htmlFor="Book An Appointment Now">Specialization:</label>
                        <div className="input flex">
                            <input type="text" placeholder=" Specialization..."  />
                        </div>
                    </div>
                    <div className="Experience">
                        <label htmlFor="Book An Appointment Now">Years Of Experience:</label>
                        <div className="input flex">
                            <input type="number" placeholder=" Years Of Experience..."  />
                        </div>
                    </div>
                    <div className="DoctorFee">
                        <label htmlFor="Book An Appointment Now">DoctorFee:</label>
                        <div className="input flex">
                            <input type="number" placeholder=" Fee..."  />
                        </div>
                    </div>

                    {/* <div className="contactInput">
                        <label htmlFor="Patient Contact">Contact Number</label>
                        <div className="input flex">
                            <PhoneInput placeholder="Contact Number..."/>
                            <BsFillTelephoneFill className="icon"/>
                        </div>
                    </div> */}

                <btn className="bookButton" href="/doctordetails">
                        <span>Submit</span>
                    </btn>
            

                    
        </div>
        </section>
    )
}

export default Doctor;

