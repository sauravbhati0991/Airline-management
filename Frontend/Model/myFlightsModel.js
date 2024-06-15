const mongoose = require("mongoose");

const myFlightSchema = new mongoose.Schema({
  seat_num: {
    type: String,
  },
  flight_number: {
    type: String,
  },
  departure_city: {
    type: String,
  },
  arrival_city: {
    type: String,
  },
  ticket_price: {
    type: String,
  },
  review: {
    type: String,
  },
  date: {
    type: String,
  },
  className: {
    type: String,
  },
  fromAirport: {
    type: String,
  },
  fromAirportCode: {
    type: String,
  },
  toAirport: {
    type: String,
  },
  toAirportCode: {
    type: String,
  },
});

const MyFlight = mongoose.model("MyFlight", myFlightSchema);

module.exports = MyFlight;
