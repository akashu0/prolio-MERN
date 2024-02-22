const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/authRoute");
const superAdminRoute = require("./routes/superAdminRoute");
const adminRoute = require("./routes/adminRoute");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

//mongoose connect
const connectDb = async () => {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Database is connect");
};

connectDb();

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/admin", adminRoute);
app.use("/api/superAdmin", superAdminRoute);

app.listen(5000, () => {
  console.log("Server is started");
});
