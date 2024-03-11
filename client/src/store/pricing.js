// priceSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  variantFields: [
    {
      variationList: "",
      fromValue: "",
      toValue: "",
      mrpValue: "",
      spRatesValue: "",
      l1RatesValue: "",
      l2RatesValue: "",
      l3RatesValue: "",
    },
  ],
};

const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    updateVariantField(state, action) {
      const { index, fieldName, value } = action.payload;
      state.variantFields[index][fieldName] = value;
    },
    addVariantField(state) {
      state.variantFields.push({
        variationList: "",
        fromValue: "",
        toValue: "",
        mrpValue: "",
        spRatesValue: "",
        l1RatesValue: "",
        l2RatesValue: "",
        l3RatesValue: "",
      });
    },
  },
});

export const { updateVariantField, addVariantField } = priceSlice.actions;
export default priceSlice.reducer;
