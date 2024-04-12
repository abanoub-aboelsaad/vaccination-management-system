import React from 'react';
import'./PatientVaccineDetails.css';
import Navbar from '../../components/Navbar';

function PatientVaccineDetails() {
  return (
    <div>
      <Navbar />
       <h1>Patient Vaccine Details:</h1>




       <section className="profile_container">
    <div className="profile_img_section">
      <img className="profile_img-LG" src="https://cdn.idntimes.com/content-images/community/2020/10/122163576-262420488513552-863075192792965334-n-f95e3dd6d25d3618eb9f1b3b9bcc5796.jpg" />
    </div>
    <div className="profile_desc_section">
      <h2>name's vax</h2>
      <p className="description">
        here we write information about 
        the veccien 
        djjdjkddk
        kdoddk dfjdofjdoj 
      </p>
      <div className="interests">
      <button className="custom-btn btn-2">FirstDose</button>
        <button className="custom-btn btn-2">SecondDose</button>
      
      </div>
    </div>
  </section>





       {/*end code*/}
    </div>
  )
}

export default PatientVaccineDetails
