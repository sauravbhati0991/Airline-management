const mongoose = require("mongoose");
const fs = require("fs");
const Book = require("./../Model/bookModel");

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

const book = JSON.parse(fs.readFileSync(`${__dirname}/flight.json`, "utf-8"));

const importData = async () => {
  try {
    await Book.create(book);
    console.log("Data successfully loaded.");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};
const deleteData = async () => {
  try {
    await Book.deleteMany();
    console.log("Data successfully deleted.");
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === "--import") {
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

// process = node Data/import_data.js --import
