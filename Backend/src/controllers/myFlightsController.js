
import { ApiResponse } from "../utils/ApiResponse.js";
import { MyFlight } from "../models/myFlightsModel.js";
import { asyncHandler } from "../utils/asyncHandler.js";


const getAllBookings = asyncHandler(async (req, res, next) => {
  const flights = await MyFlight.find(req.query);
  res.status(200).json(
  new ApiResponse(200, {data: flights}, "Success")
  )
});

export {getAllBookings}
