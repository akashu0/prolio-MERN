// rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
// import otherSliceReducer from './otherSlice';

const rootReducer = combineReducers({
  form: formReducer,
  // Add other slice reducers here
});

export default rootReducer;
