import React, { useEffect, useState } from 'react';
import OpportunityCard from './OpportunityCard';
import axios from 'axios';
import { getOpportunity } from '../Components/api';

const Opportunity = () => {
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
      const response = await getOpportunity();
      return response.data;
    } catch (error) {
      throw error;
    }
  };

  return (
    <div>
      <header>
        <h1>Opportunities</h1>
      </header>
      <main>
        <div className="opportunity-card-container">
          {opportunities.map((opportunity, index) => (
            <OpportunityCard
              key={index}
              title={opportunity.title}
              description={opportunity.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Opportunity;
