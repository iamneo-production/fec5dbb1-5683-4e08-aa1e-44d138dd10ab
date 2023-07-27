import React, { useEffect, useState } from 'react';
import '../Assets/css/VolunteerDetails.css'; 
import Navbar from '../Components/NavBar';
// import axios from 'axios';
import { getVolunteer } from '../Components/api';

const VolunteerDetailsPage = () => {
  const [volunteers, setVolunteers] = useState([]);

  useEffect(() => {
    // Fetch volunteer details from the backend API
    fetchVolunteerDetails()
      .then(data => setVolunteers(data))
      .catch(error => console.error('Error fetching volunteer details:', error));
  }, []);

  // Fetch volunteer details from the backend API
  const fetchVolunteerDetails = async () => {
    try {
      const response = await getVolunteer(); // Replace this URL with the actual URL of your Spring backend API endpoint
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="volunteer-details-page">
        <header>
          <h1>Volunteer Details</h1>
        </header>
        <main>
          {volunteers.map(volunteer => (
            <div key={volunteer.id} className="volunteer-details-container">
              {/* <img src={volunteer.profilePicture} alt="Profile Picture" className="profile-picture" /> */}
              <h2 className="volunteer-name">{volunteer.name}</h2>
              <p className="volunteer-info">Email: {volunteer.email}</p>
              <h2 className="section-heading">Skills</h2>
              <ul className="skill-list">
                {volunteer.skills.split(',').map(skill => (
                  <li key={skill.trim()}>{skill.trim()}</li>
                ))}
              </ul>
              <h2 className="section-heading">Interests</h2>
              <ul className="interests-list">
                {volunteer.interests.split(',').map(interest => (
                  <li key={interest.trim()}>{interest.trim()}</li>
                ))}
              </ul>
              <h2 className="section-heading">Availability</h2>
              <p className="volunteer-info">{volunteer.availability}</p>
              {/* Display the resume (You can handle it according to your requirements) */}
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default VolunteerDetailsPage;
