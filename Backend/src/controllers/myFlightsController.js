import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getAllBookings = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const flights = await User.findById(id);
  res.status(200).json(new ApiResponse(200, { data: flights }, "Success"));
});

const deleteBooked = asyncHandler(async (req, res, next) => {
  const { id } = req.params;
  const { flightsBooked } = req.body;
  const user = await User.findByIdAndUpdate(
    id,
    { flightsBooked },
    { new: true }
  );
  if (!user) {
    return res.status(404).json({
      status: "fail",
      message: "User not found",
    });
  }

  res.status(201).json(new ApiResponse(200, { data: user }, "Success"));
});

export { getAllBookings, deleteBooked };
