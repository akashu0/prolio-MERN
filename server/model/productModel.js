const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  productCategory: {
    type: String,
    required: true,
  },
  productSubCat: {
    type: String,
    required: true,
  },
  product_type: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  relationwithProduct: {
    type: String,
    required: true,
  },
  manufacturer: {
    type: String,
    required: true,
  },
  productImage: [
    {
      type: String,
      default: "",
    },
  ],
  description: {
    type: String,
    required: true,
  },
  specification: [
    {
      name: {
        type: String,
        default: "",
      },
      value: {
        type: String,
        default: "",
      },
    },
  ],
  warranty: {
    type: String,
    required: true,
  },
  benefits: {
    type: String,
    required: true,
  },
  greenAspect: {
    type: String,
    required: true,
  },
  productFinish: {
    type: String,
    required: true,
  },
  productFinishImg: [
    {
      type: String,
      default: "",
    },
  ],
  price: [
    {
      ratesfor: {
        type: String,
        required: true,
      },
      quantity: {
        type: String,
        required: true,
      },
      mrp: {
        type: String,
        required: true,
      },
      perItem: {
        type: String,
        required: true,
      },
    },
  ],
});
