import React, { useState, useEffect } from 'react';
// import axios from 'axios';
import "../Assets/css/get.css";
import { deleteVolunteer, getVolunteer } from './api';
import { Delete } from '@mui/icons-material';

function VolunteerDetails() {
  
  const [volunteers, setVolunteers] = useState([]);
  useEffect(() => {
    getVolunteer()

      .then(response => {
        setVolunteers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    deleteVolunteer(id)
      .then(response => {
        setVolunteers(prevVolunteers => prevVolunteers.filter(volunteer => volunteer.id !== id));
      })
      .catch(error => {
        console.log(error);
      });
  };

  

  return (
    <div className="get-container">
      <h1>VOLUNTEER DETAILS</h1>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Skills</th>
            <th>Interests</th>
            <th>Availability</th>
            {/* <th>Resume</th> */}
            <th>Actions</th> 
          </tr>
        </thead>
        <tbody>
          {volunteers.map(volunteer => (
            <tr key={volunteer.id}>
              <td>{volunteer.id}</td>
              <td>{volunteer.name}</td>
              <td>{volunteer.email}</td>
              <td>{volunteer.skills}</td>
              <td>{volunteer.interests}</td>
              <td>{volunteer.availability}</td>
              {/* <td>{volunteer.resume}</td> */}
              <td>
              
                <button onClick={() => handleDelete(volunteer.id)}><span className="box">
                 <Delete/>
                </span></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VolunteerDetails;
