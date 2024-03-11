import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    variantName: "",
    attributes: [{ attributeName: "", value: "" }],
    images: [{ base64: "" }],
  },
];

const variationSlice = createSlice({
  name: "variation",
  initialState,
  reducers: {
    
   
  },
});

export const { } =
  variationSlice.actions;
export default variationSlice.reducer;
