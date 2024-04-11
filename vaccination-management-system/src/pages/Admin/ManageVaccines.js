import React from 'react';
import './ManageVaccines.css';
import Navbar from '../../components/Navbar';
import { useState } from 'react';

function ManageVaccines() {
  const [centers, setCenters] = useState([]);
  return (
    <div>
      <Navbar />
      <div>
      {centers.map((center, index) => (
        <div className="card" key={index}>
          <div className="card-details">
            <p className="text-title">{center.name}</p>
            <p className="text-body">{center.location}</p>
          </div>
        
        </div>
      ))}
    </div>
    
       <h1>Manage Vaccines:</h1>



       <section className="profile_container">
    <div className="profile_img_section">
      <img className="profile_img-LG" src="https://cdn.idntimes.com/content-images/community/2020/10/122163576-262420488513552-863075192792965334-n-f95e3dd6d25d3618eb9f1b3b9bcc5796.jpg" />
    </div>
    <div className="profile_desc_section">
      <h2>name's vaccines</h2>
      <div className="interests">
      <button className="custom-btn btn-2">ViewDetails</button>
      </div>
    
    </div>
  </section>

  <div className="interests">
      <button className="custom-btn btn-2">AddVacciness</button>
      </div>
     
       
       {/*end code*/}
    </div>
  )
}

export default ManageVaccines
