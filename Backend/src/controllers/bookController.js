import { asyncHandler } from "../utils/asyncHandler.js";
// import { MyFlight } from "../models/myFlightsModel.js";
import { User } from "../models/user.model.js";

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
  const { id } = req.params;
  const flightData = req.body;
  const user = await User.findById(id);
  if (!user) {
    return res.status(404).json({
      status: "fail",
      message: "User not found",
    });
  }
  await user.flightsBooked.push(flightData);
  await user.save();
  res.status(201).json({
    status: "success",
    data: {
      flightsBooked: user.flightsBooked,
    },
  });
});

export { getAllFlights, bookFlight };
