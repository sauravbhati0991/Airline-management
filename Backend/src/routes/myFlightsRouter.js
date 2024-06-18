import express from "express";
import {
  getAllBookings,
  deleteBooked,
} from "./../controllers/myFlightsController.js";
// const myFlightController = require("./../Contoller/myFlightsController");
const Router = express.Router();

Router.route("/").get(getAllBookings);
Router.route("/:id").patch(deleteBooked);

export default Router;
