import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import VolunteerSearchAndSignup from "./pages/VolunteerSearchAndSignUp";
import VolunteerTrainingAndResources from "./pages/Resources";
import VolunteerDetailsPage from "./pages/VolunteerDetails";
import EventManagement from "./pages/Event";
import Analytics from "./pages/Analytics";
import RatingsAndReviews from "./Components/Review";
import ProfilePage from "./pages/Profile";
import VolunteerProfileCreation from "./pages/VolunteerProfile";
import VolunteerDetails from "./Components/get";
import ViewContactDetails from "./Components/get1";
import ContactList from "./Components/ContactList";
// import VolunteerProfileUpdate from "./pages/UpdateVolunteerDetails";

function App() {
  return(
    <div className="app">
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/volunteersearchandsignup" element={<VolunteerSearchAndSignup/>}/>
        <Route path="/volunteertrainingandresources" element={<VolunteerTrainingAndResources/>}/>
        <Route path="/volunteerdetails" element={<VolunteerDetailsPage/>}/>
        <Route path="/eventmanagement" element={<EventManagement/>}/>
        <Route path="/analyticsandreporting" element={<Analytics/>}/>
        <Route path="/review" element={<RatingsAndReviews/>}/>
        <Route path="/profile" element={<ProfilePage/>}/>
        <Route path="/volunteerprofilecreation" element={<VolunteerProfileCreation/>}/>
        <Route path="/viewdetails" element={<VolunteerDetails/>}/>
        {/* <Route path="/viewcontactdetails" element={<ViewContactDetails/>}/> */}
        <Route path="/viewcontactdetails" element={<ContactList/>}/>
        {/* <Route path="/volunteerprofileupdate" element={<VolunteerProfileUpdate/>}/> */}
        
      </Routes>
     
    </div>
  );

}
export default App;