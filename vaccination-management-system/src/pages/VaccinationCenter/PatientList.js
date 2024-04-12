import React from 'react';
import Navbar from '../../components/Navbar';
import './PatientList.css';

function PatientList() {
  return (
    <div>
      <Navbar />
       
   <div className="container bootstrap snippets bootdey">
  <div className="header">
    <h1 className="namee">
      <span className="fa fa-users fa-2x" />
      patients
    </h1>
  </div>
  <div className="jumbotron" style={{minHeight: 400, height: 'auto'}}>
    <ul className="list-group">
      <li className="list-group-item user-item text-left">
        <img className="img-circle img-user img-thumbnail " src="https://bootdey.com/img/Content/avatar/avatar7.png"  />
        <h3>
          <a href="#">Bootdey bootstrap</a><br />
        </h3>     
      </li>
      <li className="list-group-item user-item text-left">
        <img className="img-circle img-user  img-thumbnail" src="https://bootdey.com/img/Content/avatar/avatar1.png" />
        <h3>
          <a href="#">Mark martin lowkeymth</a><br />
        </h3>  
      </li>
      <li className="list-group-item user-item text-left">
        <img className="img-circle img-user  img-thumbnail" src="https://bootdey.com/img/Content/avatar/avatar6.png" />
        <h3>
          <a href="#">John Doe</a><br />
        </h3>  
      </li>
      <li className="list-group-item user-item text-left">
        <img className="img-circle img-user img-thumbnail " src="https://bootdey.com/img/Content/avatar/avatar7.png" />
        <h3>
          <a href="#">Bootdey bootstrap</a><br />
        </h3>     
      </li>
    </ul>
  </div>
</div>
                                












       
    </div>
  )
}

export default PatientList
