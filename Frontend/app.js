const express = require("express");
const bookRouter = require("./Routes/bookRouter");
const AppError = require("./Utilities/appError");
const cors = require("cors");
const myFlightRoute = require("./Routes/myFlightsRouter");

const app = express();

app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use("/book", bookRouter);
app.use("/myflights", myFlightRoute);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
});

module.exports = app;
