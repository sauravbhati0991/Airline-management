const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

mongoose
  .connect(
    "mongodb+srv://iitjeetopper23:hola123@cluster0.kc9fugk.mongodb.net/usersAndFlights"
  )
  .then(() => {
    console.log("DataBase Connected successfully.");
  })
  .catch((err) => {
    console.error("Database connection error:", err);
  });

const port = 5173;
app.listen(port, () => {
  console.log(`App is running on port : ${port}`);
});
