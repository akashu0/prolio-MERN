const mongoose = require("mongoose");
const PincodeSchema = new mongoose.Schema({
  country: {
    type: String,
    required: true,
  },
  stateName: {
    type: String,
    required: true,
  },
  cityName: {
    type: String,
    required: true,
  },
  pinCodes: [
    {
      type: String,
      required: true,
    },
  ],
});

const PincodeModel = mongoose.model("Pincode", PincodeSchema);

module.exports = PincodeModel;
