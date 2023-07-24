import React, { useEffect, useState } from 'react';
import '../Assets/css/OpportunityPage.css';
import axios from 'axios';

function OpportunityPage() {
  const [opportunities, setOpportunities] = useState([]);

  useEffect(() => {
    // Fetch opportunities from the backend API
    fetchOpportunities()
      .then(data => setOpportunities(data))
      .catch(error => console.error('Error fetching opportunities:', error));
  }, []);

  // Fetch opportunities from the backend API
  const fetchOpportunities = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/opportunitypage'); // Replace this URL with the actual URL of your backend API endpoint for opportunities
      return response.data;
    } catch (error) {
      console.error('Error fetching opportunities:', error);
      return [];
    }
  };

  return (
    <div>
      {opportunities.map(opportunity => (
        <div key={opportunity.id} className="opportunity-page">
          <header>
            <h1>{opportunity.title}</h1>
          </header>
          <main>
            <div className="opportunity-details">
              <img src={opportunity.imageUrl} alt="Opportunity" />
              <h2>Description</h2>
              <p>{opportunity.description}</p>
              <h2>Requirements</h2>
              <ul>
                {opportunity.requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
              <h2>Location</h2>
              <p>{opportunity.location}</p>
              <h2>Contact</h2>
              <p>Email: {opportunity.contactEmail}</p>
              <p>Phone: {opportunity.contactPhone}</p>
            </div>
          </main>
        </div>
      ))}
    </div>
  );
}

export default OpportunityPage;
