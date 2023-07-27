
import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import contactReducer from "../pages/ContactReducers";

const rootReducer = combineReducers({
  contact: contactReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
