const catchAsync = require("../Utilities/catchAsync");
const MyFlight = require("./../Model/myFlightsModel");
const Book = require("./../Model/bookModel");

exports.getAllFlights = catchAsync(async (req, res, next) => {
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

exports.bookFlight = catchAsync(async (req, res, next) => {
  const booked = await MyFlight.create(req.body);
  res.status(201).json({
    status: "success",
    data: {
      data: booked,
    },
  });
});
