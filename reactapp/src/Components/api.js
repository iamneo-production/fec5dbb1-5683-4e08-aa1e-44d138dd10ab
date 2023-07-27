import axios from "axios";


const username = 'vijay';
const password = '123456';
const authHeader = `Basic ${btoa(`${username}:${password}`)}`;

const headers = {
  'Authorization': authHeader,
  'Content-Type': 'application/json',
};


const URI = 'http://localhost:8080'
const URI2 = 'http://localhost:8081'
 
const getVolunteer = () => axios.get(`${URI}/getVolunteer`, { headers })
const getLogin = () => axios.get(`${URI}/users`, { headers })
const getContact = () => axios.get(`${URI2}/getContact`, { headers })
const getOpportunity = () => axios.get(`${URI}/api/opportunities/get`, { headers })

const postRegister = (data) => axios.post(`${URI}/register`, data,{ headers })
const postContact = (contactData) => axios.post(`${URI2}/Contact/post`, contactData, { headers });
const postVolunteer = (formData) => axios.post(`${URI}/Volunteer/post`, formData, { headers });

const deleteVolunteer = (formData,id) => axios.delete(`${URI}/Volunteer/delete/${id}`, formData, { headers });

export {getVolunteer,getLogin,postRegister,getContact,postContact,getOpportunity,postVolunteer,deleteVolunteer}