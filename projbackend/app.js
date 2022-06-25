require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();

const authRoute = require("./routes/auth");
const userRoute = require("./routes/user");
const alluserRoute = require("./routes/alluser");
const categoryRoute = require("./routes/category");
const attendanceRoute = require("./routes/attendance");

// MiddleWare intiallisation
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");

//DB CONNECTIONSs
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`DB IS CONNECTED`);
  })
  .catch(() => {
    console.log(`DB IS NOT CONNECTED`);
  });
//Middle-Ware
app.use(bodyParser.json());
app.use(cookieParser());
app.use(cors());

//My  Routes
app.use("/api", authRoute);
app.use("/api", userRoute);
app.use("/api", categoryRoute);
app.use("/api", alluserRoute);
app.use("/api",attendanceRoute);
// app.use("/api", prodRoute)

// Port
const port = process.env.PORT || 8000;

//Listener
app.listen(port, () => {
  console.log(`PORT IS ${port}`);
});

// DATABASE = mongodb+srv://admin:admin@cluster0.aice6.mongodb.net/School?retryWrites=true&w=majorityrs