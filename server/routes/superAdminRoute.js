const express = require("express");
const superAdmin_route = express();

const authContoller = require("../controllers/authControllers");
const pincodeController = require("../controllers/pincodeController");

// superAdmin_route.post("/login", authContoller.login);
superAdmin_route.post("/createPincode", pincodeController.createPincode);
superAdmin_route.get("/getAllPincode", pincodeController.getAllPincode);

module.exports = superAdmin_route;
