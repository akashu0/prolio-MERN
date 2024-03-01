const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  //   productCategory: {
  //     type: String,
  //     required: true,
  //   },
  //   productSubCat: {
  //     type: String,
  //     required: true,
  //   },
  size:[ {
    type: String,
    required: true,
  }],
  product_type: {
    type: String,
    required: true,
  },
  productID: {
    type: String,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  //   relationwithProduct: {
  //     type: String,
  //     required: true,
  //   },
  manufacturer: {
    type: String,
    required: true,
  },
  //   productImage: [
  //     {
  //       type: String,
  //       default: "",
  //     },
  //   ],
  description1: {
    type: String,
    required: true,
  },
  description2: {
    type: String,
    required: true,
  },
  //   specification: [
  //     {
  //       name: {
  //         type: String,
  //         default: "",
  //       },
  //       value: {
  //         type: String,
  //         default: "",
  //       },
  //     },
  //   ],
  warranty: {
    type: String,
    required: true,
  },
  benefits: {
    type: String,
    required: true,
  },
  //   greenAspect: {
  //     type: String,
  //     required: true,
  //   },
  productFinish: {
    type: String,
    required: true,
  },
  //   productFinishImg: [
  //     {
  //       type: String,
  //       default: "",
  //     },
  //   ],
  price: {
    type: String,
    required: true,
  },
});

const Category = mongoose.model("Item", itemSchema);

module.exports = Category;
