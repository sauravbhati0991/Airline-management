const mongoose = require("mongoose");

const flightSchema = new mongoose.Schema({
  flight_number: {
    type: Number,
    unique: true,
    required: [true, "A Flight must have a Flight Number"],
    min: [10000, "Flight Number must be above 10000."],
    max: [99999, "Flight Number must be below 99999."],
  },
  arrival_date: {
    type: String,
    required: [true, "A Flight must have an arrival day."],
    enum: {
      values: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      message: `Arrival Dates are either: "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"`,
    },
  },
  departure_city: {
    type: String,
    required: [true, "A Flight must have a departure city name."],
  },
  arrival_city: {
    type: String,
    required: [true, "A Flight must have a arrival city name."],
  },
  ticket_price: {
    type: Number,
    required: [true, "A Flight must a basic price."],
    set: (val) => Math.round(val * 100) / 100,
  },
  review: {
    type: String,
    maxlength: [40, "A review must have less than or equal to 40 characters."],
    minlength: [4, "A review must have more than or equal to 4 characters."],
  },
  seats: {
    type: Number,
    default: 300,
  },
});

const Book = mongoose.model("Book", flightSchema);

module.exports = Book;
