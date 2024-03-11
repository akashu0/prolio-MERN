import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productId: "",
};

const productIdSlice = createSlice({
  name: "productId",
  initialState,
  reducers: {
    saveproductId: (state, action) => {
      state.productId = action.payload;
    },
  },
});

export const { saveproductId } = productIdSlice.actions;
export default productIdSlice.reducer;
