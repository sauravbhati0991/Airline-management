import { time } from "console";
import mongoose, { Schema } from "mongoose";
// import { type } from "os";

const flightSchema = mongoose.Schema({
  price: {
    type: Number,
    required: true,
  },

  availabality: {
    type: Boolean,
    required: true,
  },

  airline: {
    type: String,
    enum: ["Air Asia", "Indigo", "Spice Jet"],
    required: true,
  },

  person: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },

  departureAirport: {
    type: Schema.Types.ObjectId,
    ref: "Airport",
  },

  arrivalAirport: {
    type: Schema.Types.ObjectId,
    ref: "Airport",
  },

  departureTime: {
    type: String,
    required: true,
  },

  arrivalTime: {
    type: String,
    required: true,
  },
});

export const Flight = mongoose.model("Flight", flightSchema);
