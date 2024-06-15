const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const app = require("./app");

mongoose
  .connect("mongodb://127.0.0.1:27017/airline")
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
