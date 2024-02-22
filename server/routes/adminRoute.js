const express = require("express");
const admin_route = express();
const path = require("path");
const multer = require("multer");

// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "uploads/"); // Set the destination folder
//   },
//   filename: function (req, file, cb) {
//     cb(null, file.originalname); // Use the original filename
//   },
// });
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../uploads"), function (err, success) {
      if (err) {
        throw err;
      }
    });
  },
  filename: function (req, file, cb) {
    const name = Date.now() + "-" + file.originalname;
    cb(null, name, function (error, success) {
      if (error) {
        throw error;
      }
    });
  },
});

const upload = multer({
  storage: storage,
  //   limits: { fileSize: 2 * 1024 * 1024 }, // Maximum file size: 2MB
});

const companyController = require("../controllers/companyController");

admin_route.post(
  "/createNewCompany",
  upload.array("documents"),
  companyController.registerNewCompany
);

module.exports = admin_route;
