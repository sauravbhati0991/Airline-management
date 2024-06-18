import cookieParser from "cookie-parser";
import express, { urlencoded } from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cookieParser());

//import router
import userRouter from "./routes/user.route.js";
import bookRouter from "./routes/bookRouter.js";
import myFlightRouter from "./routes/myFlightsRouter.js";

//router declairation
app.use("/api/v1/user", userRouter);
app.use("/api/book", bookRouter);
app.use("/api/myflights", myFlightRouter);
// app.all("*", (req, res, next) => {
//   next(new AppError(`Can't find ${req.originalUrl} on this server.`, 404));
// });

export { app };
