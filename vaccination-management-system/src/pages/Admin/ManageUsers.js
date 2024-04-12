import React from 'react';
import Navbar from '../../components/Navbar';
import './ManageUsers.css';



function ManageUsers() {
  return (
    <div>
      <Navbar /> 
      
     
  <table>
  <thead>
    <tr>
      <th >Name</th>
      <th >Created</th>
      <th >email</th>
      <th >action</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Leonard Hofstadter</td>
      <td>07/06/2016</td>
      <td>lhofstadter@caltech.edu</td>
       <button class="accept-button">Accept</button>
       <button class="delete-button">Delete</button>
    </tr>
    <tr>
      <td>Sheldon Cooper</td>
      <td>07/01/2016</td>
      <td>lhofstadter@caltech.edu</td>
      <button class="accept-button">Accept</button>
       <button class="delete-button">Delete</button>
    </tr>
    <tr>
      <td>Howard Wolowitz</td>
      <td>06/05/2016</td>
      <td>lhofstadter@caltech.edue</td>
      <button class="accept-button">Accept</button>
       <button class="delete-button">Delete</button>
    </tr>
    <tr>
      <td >Raj Koothrappali</td>
      <td>06/20/2016</td>
      <td>lhofstadter@caltech.edu</td>
      <button class="accept-button">Accept</button>
       <button class="delete-button">Delete</button>
    </tr>
    <tr>
      <td>Penny</td>
      <td>07/06/2016</td>
      <td>lhofstadter@caltech.edu</td>
      <button class="accept-button">Accept</button>
       <button class="delete-button">Delete</button>
    </tr>
     
  </tbody>
</table>












  
    </div>
  );
}

export default ManageUsers;
