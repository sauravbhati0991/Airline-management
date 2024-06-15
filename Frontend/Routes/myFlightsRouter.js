const express = require("express");
const myFlightController = require("./../Contoller/myFlightsController");
const Router = express.Router();

Router.route("/").get(myFlightController.getAllBookings);

module.exports = Router;
