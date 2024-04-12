import React from 'react';
import './PatientDetails.css';
import Navbar from '../../components/Navbar';


function PatientDetails() {
  return (
    <div>
      <Navbar />
       <h1>Patient Details:</h1>



       <section className="profile_container">
    <div className="profile_img_section">
      <img className="profile_img-LG" src="https://cdn.idntimes.com/content-images/community/2020/10/122163576-262420488513552-863075192792965334-n-f95e3dd6d25d3618eb9f1b3b9bcc5796.jpg" />
    </div>
    <div className="profile_desc_section">
      <p>Patient records that help diagnose individuals with medical issues and provide reference information for researchers and pharmaceutical companies to study diseases, human anatomy, and drug efficacy.</p>
      <div className="interests">
      <button className="custom-btn btn-2">ReserveFirstDose</button>
      </div>
      <div className="interests">
        <button className="custom-btn btn-2">ReserveSecondDose</button>
      </div>


      <div className="interests">
      <button className="custom-btn btn-2">ViewCertificate</button>
      </div>
     
    </div>
  </section>


       {/*end code*/}
    </div>
  )
}

export default PatientDetails
