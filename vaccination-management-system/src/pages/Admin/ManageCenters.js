import React from 'react';
import Navbar from '../../components/Navbar';
import './ManageCenters.css'
import { useState } from 'react';
import { useEffect } from 'react';





function ManageCenters() {


  const [centers, setCenters] = useState([]);
  








  useEffect(() => {
    // Fetch data from the API
    fetch('')
      .then(response => response.json())
      .then(data => setCenters(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);





  return (
    <div>
      <Navbar />
      
      <div className='sectionn'>
        <h1 className='introTitle'>Quikely find nearby vaccination centers to receive your vaccine </h1>
      </div>


      
       <div>
      {centers.map((center, index) =>(
      <div className="gallery" key={index}>
  <div className="content">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStQ9aDamtHM47EumsTsFwdB5HYv_LADPOXflpWVQDWvQ&s" alt />
    <h3>{center.name}</h3>
    
   
    <button className="buy-3">see details</button>
  </div>
</div>
      ))}
      </div>




























    </div>
  )
}

export default ManageCenters
