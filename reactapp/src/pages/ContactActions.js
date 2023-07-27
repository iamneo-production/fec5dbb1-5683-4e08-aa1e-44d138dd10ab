import { getContact, postContact } from "../Components/api";

export const GET_CONTACTS = "GET_CONTACTS";
export const ADD_CONTACT = "ADD_CONTACT";

export const getContacts = () => async (dispatch) => {
  try {
    const response = await getContact();
    dispatch({
      type: GET_CONTACTS,
      payload: response.data,
    });
  } catch (error) {
    // Handle error here
  }
};

export const addContact = (contactData) => async (dispatch) => {
  try {
    const response = await postContact(contactData);
    dispatch({
      type: ADD_CONTACT,
      payload: response.data,
    });
  } catch (error) {
    // Handle error here
  }
};
