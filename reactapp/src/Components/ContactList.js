import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../pages/ContactActions";
import Navbar from "./NavBar";
import "../Assets/css/ContactList.css"; 

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contact.contacts);

  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);

  return (
    <div className="contact-list-container">
      <div>
        <h2 className="contact-list-heading">Contact List</h2>
        <table className="contact-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <tr key={contact.id} className="contact-list-item">
                <td>{contact.name}</td>
                <td>{contact.email}</td>
                <td>{contact.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ContactList;
