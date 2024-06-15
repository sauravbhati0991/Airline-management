const catchAsync = require("../Utilities/catchAsync");
const MyFlights = require("./../Model/myFlightsModel");

exports.getAllBookings = catchAsync(async (req, res, next) => {
  const flights = await MyFlights.find(req.query);
  res.status(200).json({
    app: "Airline",
    status: "success",
    results: flights.length,
    data: {
      data: flights,
    },
  });
});
