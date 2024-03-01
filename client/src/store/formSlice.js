// formSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    companyName: "",
    registrationNumber: "",
    totalEmployees: "",
    OwnerName: "",
    yearOfEstablishment: "",
    businessType: "",
  },
  contactInfo: {
    companyEmail: "",
    contactNumber: "",
    address1: "",
    address2: "",
    country: "",
    state: "",
    city: "",
    pincode: "",
  },
  documents: [
    {
      base64: "",
    },
  ],
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    updateContactInfo: (state, action) => {
      state.contactInfo = { ...state.contactInfo, ...action.payload };
    },

    addDocuments: (state, action) => {
      // Update documents array with the payload
      state.documents = action.payload;
    },
    removeDocument: (state, action) => {
      // Remove document by filtering based on id
      state.documents = state.documents.filter(
        (doc, index) => index !== action.payload
      );
    },
  },
});

export const {
  updateFormData,
  updateContactInfo,
  addDocuments,
  removeDocument,
} = formSlice.actions;
export default formSlice.reducer;
