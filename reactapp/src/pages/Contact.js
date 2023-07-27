import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addContact } from "./ContactActions";
import ContactList from "../Components/ContactList";
import "../Assets/css/Contact.css";
import Navbar from "../Components/NavBar";

const Contact = () => {
  const handleButtonClick = (event, path) => {
    event.preventDefault();
    window.location.href = path;
  };

  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact(formData));
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="contact-container">
        <h2>Add Contact</h2>
        <form onSubmit={handleSubmit}>
          <label>Name:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
          <label>Message:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} />
          <button type='submit'>
                <span className="box">
                Submit
                </span>
              </button>
          <button type='button' onClick={(e) => handleButtonClick(e, '/viewcontactdetails')}>
                <span className="box">
                VIEW DETAILS
                </span>
              </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
