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
    clearProductId: (state) => {
      state.productId = initialState.productId;
    },
  },
});

export const { saveproductId, clearProductId } = productIdSlice.actions;
export default productIdSlice.reducer;
