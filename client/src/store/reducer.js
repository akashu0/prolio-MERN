// rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import productSlice from "./productSlice";
import variationSlice from "./variation";
import priceSlice from "./pricing";
import productIdSlice from "./productId";
import tokenSlice from "./tokenSlice";

const rootReducer = combineReducers({
  form: formReducer,
  product: productSlice,
  variation: variationSlice,
  price: priceSlice,
  productId: productIdSlice,
  token: tokenSlice,
});

export default rootReducer;
