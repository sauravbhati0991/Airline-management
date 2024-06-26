import Stripe from "stripe";
const stripe = Stripe(
  "sk_test_51PSXjWRuTwtRahx7z1woHJiluqePZvn4U7QoI4nmnEOuOMSFtPg4IFmpGHTrRj5zd0Go5p9t9jBkqDZuGySibSlE00itVDfgZd"
);
import { asyncHandler } from "../utils/asyncHandler.js";
import { Book } from "../models/bookModel.js";

const getCheckOutSession = asyncHandler(async (req, res, next) => {
  const flight = await Book.findById(req.params.flightId);
  console.log(flight);
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    mode: "payment",
    success_url: `http://localhost:5173/myflights`,
    cancel_url: `http://localhost:5173/book`,
    client_reference_id: req.params.flightId,
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: `${flight.departure_city} to ${flight.arrival_city}`,
          },
          unit_amount: Math.round(flight.ticket_price) * 100,
        },
        quantity: 1,
      },
    ],
  });

  res.status(200).json({
    status: "success",
    session,
  });
});

export { getCheckOutSession };
