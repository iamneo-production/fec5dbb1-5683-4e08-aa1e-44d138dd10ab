import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Assets/css/get.css";

function ViewContactDetails() {
  const [volunteer, setVolunteers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/getContact')
      .then(response => {
        setVolunteers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>VOLUNTEER DETAILS</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Message</th>
          </tr>
        </thead>
        <tbody>
          {volunteer.map(volunteer => (
            <tr key={volunteer.email}>
              <td>{volunteer.name}</td>
              <td>{volunteer.email}</td>
              <td>{volunteer.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewContactDetails;
