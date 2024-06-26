import { Router } from "express";
import { getCheckOutSession } from "./../controllers/paymentController.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();
router.get("/checkout-session/:flightId", verifyJWT, getCheckOutSession);

export default router;
