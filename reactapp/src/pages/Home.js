import React from 'react';
import '../Assets/css/Home.css'; 
import Footer from '../Components/Footer';
import Navbar from '../Components/NavBar';
import Opportunity from '../pages/Opportunity';
import OpportunityPage from './OpportunityPage';

const Home = () => {
  const handleButtonClick = (event, path) => {
    event.preventDefault();
    window.location.href = path;
  };

  return (
    <div>
      <Navbar />
      <div className="home-page">
        <header>
          <h1 className="home-title">Welcome to Volunteer Platform</h1>
          <p className="home-subtitle">Find meaningful volunteer opportunities near you.</p>
        </header>
        <main>
          <h2 className="featured-title">Featured Opportunities</h2>
          <div className="opportunity-card">
            <Opportunity />
          </div>
          <div className='home-btn'>
            <div className='home-btn1'>
              <button type='button' onClick={(e) => handleButtonClick(e, '/volunteersearchandsignup')}>
                <span className="box">
                  Volunteer Search And SignUp
                </span>
              </button>
            </div>
            <div className='home-btn2'>
              <button type='button' onClick={(e) => handleButtonClick(e, '/volunteertrainingandresources')}>
                <span className="box">
                  Volunteer Training And Resources
                </span>
              </button>
            </div>
            <div className='home-btn4'>
              <button type='button' onClick={(e) => handleButtonClick(e, '/eventmanagement')}>
                <span className="box">
                  Event Management
                </span>
              </button>
            </div>
            <div className='home-btn5'>
              <button type='button' onClick={(e) => handleButtonClick(e, '/analyticsandreporting')}>
                <span className="box">
                  Analytics And Reporting
                </span>
              </button>
            </div>
            <div className='home-btn6'>
              <button type='button' onClick={(e) => handleButtonClick(e, '/review')}>
                <span className="box">
                  Ratings
                </span>
              </button>
            </div>
          </div>
        </main>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Home;
