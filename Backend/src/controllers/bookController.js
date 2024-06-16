import { asyncHandler } from "../utils/asyncHandler.js"; 
import { MyFlight } from "../models/myFlightsModel.js";

import { Book } from "../models/bookModel.js";


const getAllFlights = asyncHandler(async (req, res, next) => {
  const flights = await Book.find(req.query);
  res.status(200).json({
    app: "Airline",
    status: "success",
    results: flights.length,
    data: {
      data: flights,
    },
  });
});

const bookFlight = asyncHandler(async (req, res, next) => {
  const booked = await MyFlight.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      data: booked,
    },
  });
});


export {getAllFlights, bookFlight}