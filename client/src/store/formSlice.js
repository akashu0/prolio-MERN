// formSlice.js
import { createSlice } from "@reduxjs/toolkit";
import persistConfig from "./persistConfig";
import { persistReducer } from "redux-persist";

const initialState = {
  formData: {
    companyName: "",
    registrationNumber: "",
    totalEmployees: "",
    ownerName: "",
    establishmentYear: "",
    businessType: "",
  },
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
  },
});

export const { updateFormData } = formSlice.actions;
export default formSlice.reducer;
