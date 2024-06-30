const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const cookieparser = require("cookie-parser");
const userroute = require("./route/FormRoute");

app.use(express.json());
app.use(cookieparser());
app.use(cors());

app.use("/user", userroute);

const mongo_url =
  "mongodb+srv://aravinthkumaran410:OEV9wWQTyigFWWf4@cluster0.5xpq7zv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(mongo_url)
  .then(() => {
    app.listen(4000, () => {
      console.log("listen to 4000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
