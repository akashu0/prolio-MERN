import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


const initialState = {
  productDetails: {
    productName: "",
    productCategory: "",
    productSubCat: "",
    product_type: "",
    brandName: "",
    relationwithProduct: "",
    manufacturer: "",
    description1: "",
    description2: "",
    warranty: "",
    benefits: "",
    greenAspect: "",
    productFinish: "",
    material: "",
  },

  specification: [
    {
      attributeName: "",
      value: "",
    },
  ],

  variation: [
    {
      variationName: "",
      attribute: [
        {
          attributeName: "",
          value: "",
        },
      ],
      uploadImage: [
        {
          base64: "",
        },
      ],
    },
  ],
  productImage: [
    {
      base64: "",
    },
  ],
  productFinishImg: [
    {
      base64: "",
    },
  ],
};

// export const submitProductDetails = createAsyncThunk(
//   "product/submitProductDetails",
//   async (_, thunkAPI) => {
//     try {
//       const { productDetails } = thunkAPI.getState().product;
//       const res = await axios.post(
//         "https://prolio-server-gynp.onrender.com/api/product/create-product",
//         {
//           productDetails,
//         }
//       );
//       console.log(res);
//     } catch (error) {}
//   }
// );

const productDetailsSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    updateProductDetails: (state, action) => {
      state.productDetails = { ...state.productDetails, ...action.payload };
    },

    updateSpecification: (state, action) => {
      const { index, attributeName, value } = action.payload;
      state.specification[index] = { attributeName, value };
      state.specification = [...state.specification]; // Force reactivity
    },

    addProductImage: (state, action) => {
      state.productImage = action.payload;
    },
    removeProductImage: (state, action) => {
      state.productImage = state.productImage.filter(
        (doc, index) => index !== action.payload
      );
    },
    // updateVariationName: (state, action) => {
    //   const { index, variationName } = action.payload;
    //   if (state.variation[index]) {
    //     return {
    //       ...state,
    //       variation: state.variation.map((item, idx) => {
    //         if (idx === index) {
    //           return { ...item, variationName: variationName };
    //         }
    //         return item;
    //       }),
    //     };
    //   }
    //   return state; // If index is invalid, return current state
    // },
    // updateAttribute: (state, action) => {
    //   const { index, attributeIndex, attributeName, value } = action.payload;
    //   state.variation[index].attribute[attributeIndex] = {
    //     attributeName,
    //     value,
    //   };
    // },
    // updateImage: (state, action) => {
    //   const { index, imageIndex, base64 } = action.payload;
    //   return {
    //     ...state,
    //     variation: state.variation.map((item, idx) => {
    //       if (idx === index) {
    //         return {
    //           ...item,
    //           uploadImage: item.uploadImage.map((uploadItem, uploadIdx) => {
    //             if (uploadIdx === imageIndex) {
    //               return {
    //                 ...uploadItem,
    //                 base64: base64,
    //               };
    //             }
    //             return uploadItem;
    //           }),
    //         };
    //       }
    //       return item;
    //     }),
    //   };
    // },
    deleteUpdateImage: (state, action) => {
      const { index, imageIndex } = action.payload;
      // Ensure the index and imageIndex are valid
      if (
        state.variation[index] &&
        state.variation[index].uploadImage[imageIndex]
      ) {
        // Remove the image from the uploadImage array
        state.variation[index].uploadImage.splice(imageIndex, 1);
      }
    },
    clearState: (state) => {
      // Reset all state properties to initial values
      Object.assign(state, initialState);
    },
  },
});

export const {
  updateProductDetails,
  addProductImage,
  removeProductImage,
  updateSpecification,
  // updateVariationName,
  updateAttribute,
  // updateImage,
  deleteUpdateImage,
  clearState
} = productDetailsSlice.actions;
export default productDetailsSlice.reducer;
