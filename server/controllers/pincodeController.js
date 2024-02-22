const PincodeModel = require("../model/pincode");

const createPincode = async (req, res) => {
  try {
    const pincodeData = req.body;
    const newPin = new PincodeModel(pincodeData);
    const savedPin = await newPin.save();
    res.status(201).json({ message: "success", savedPin });
  } catch (error) {
    console.error("Error saving pin code:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createPincode,
};
