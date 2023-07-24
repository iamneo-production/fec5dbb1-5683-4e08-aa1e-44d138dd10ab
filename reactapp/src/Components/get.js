import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Assets/css/get.css";

function VolunteerDetails() {
  
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/getVolunteer')
      .then(response => {
        setVolunteers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  // Function to handle delete button click for a volunteer
  const handleDelete = (id) => {
    // Implement the logic to delete the volunteer with the given 'id' from the server
    axios.delete(`http://localhost:8080/Volunteer/delete/${id}`)
      .then(response => {
        // Assuming the delete operation was successful, remove the volunteer from the state
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
            <th>Actions</th> {/* Added a new column for Actions */}
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
                 Delete
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
