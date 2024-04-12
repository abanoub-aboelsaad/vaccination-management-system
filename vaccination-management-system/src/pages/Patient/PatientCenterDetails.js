import React from 'react';
import './PatientCenterDetails.css';
import Navbar from '../../components/Navbar';

function PatientCenterDetails() {
  return (
    <div>
      <Navbar />
       <h1>Patient Center Details:</h1>


       <p> In Cairo’s Nasr City, north-east of the capital, sits one of the largest COVID-19 vaccination centers of Egypt. Inaugurated mid-May 2021 by Prime minister Mostafa Madbouly and Minister of Health and Population Hala Zayed, this large, modern infrastructure, located next to the Cairo International Convention Center, has the capacity to vaccinate a whopping 10,000 people daily
       
       </p>
       


       <section className="profile_container">
    <div className="profile_img_section">
      <img className="profile_img-LG" src="https://cdn.idntimes.com/content-images/community/2020/10/122163576-262420488513552-863075192792965334-n-f95e3dd6d25d3618eb9f1b3b9bcc5796.jpg" />
    </div>
    <div className="profile_desc_section">
      <h2>name's vax</h2>
     
      <div className="interests">
      <button className="custom-btn btn-2">READ MORE</button>
      </div>
    </div>
  </section>





  
       {/*end code*/}
    </div>
  )
}

export default PatientCenterDetails
