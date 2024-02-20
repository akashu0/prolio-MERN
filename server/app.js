const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");

const userRoute = require("./routes/userRoute");
const authRoute = require("./routes/adminRoute");

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
app.use("/api/auth", userRoute);

app.listen(5000, () => {
  console.log("Server is started");
});
