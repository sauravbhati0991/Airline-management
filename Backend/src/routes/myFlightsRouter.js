import express from 'express';
import {getAllBookings} from "./../controllers/myFlightsController.js"
// const myFlightController = require("./../Contoller/myFlightsController");
const Router = express.Router();

Router.route("/").get(getAllBookings);

export default Router
