const express = require("express");
const bookController = require("../Contoller/bookController");

const Router = express.Router();

Router.route("/")
  .get(bookController.getAllFlights)
  .post(bookController.bookFlight);

module.exports = Router;
