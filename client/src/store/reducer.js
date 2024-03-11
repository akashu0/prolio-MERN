// rootReducer.js
import { combineReducers } from "@reduxjs/toolkit";
import formReducer from "./formSlice";
import productSlice from "./productSlice";
// import otherSliceReducer from './otherSlice';
import variationSlice from "./variation";
import priceSlice from "./pricing";
import productIdSlice from "./productId"

const rootReducer = combineReducers({
  form: formReducer,
  product: productSlice,
  variation: variationSlice,
  price: priceSlice,
  productId: productIdSlice
});

export default rootReducer;
