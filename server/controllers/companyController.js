const CompanyModel = require("../model/companyDetailsModel");

const registerNewCompany = async (req, res) => {
  try {
    //if array of documents there
    const arrDocument = [];
    if (req.files) {
      for (let i = 0; i < req.files.length; i++) {
        arrDocument.push(req.files[i].filename);
      }
    }
    const {
      companyName,
      OwnerName,
      registrationNumber,
      yearOfRegister,
      businessType,
      totalEmployees,
      companyEmail,
      contactNumber,
      address,
      country,
      state,
      city,
      pincode,
    } = req.body;

    const newCompany = new CompanyModel({
      companyName,
      OwnerName,
      registrationNumber,
      yearOfRegister,
      businessType,
      totalEmployees,
      companyEmail,
      contactNumber,
      address,
      country,
      state,
      city,
      pincode,
      documents: arrDocument,
    });
    await newCompany.save();
    res.status(201).json({ message: "Register Successfully" });
  } catch (error) {
    console.error("Error saving company details:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  registerNewCompany,
};
