import { GET_CONTACTS, ADD_CONTACT } from "./ContactActions";

const initialState = {
  contacts: [],
};

const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload,
      };
    case ADD_CONTACT:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    default:
      return state;
  }
};

export default contactReducer;
