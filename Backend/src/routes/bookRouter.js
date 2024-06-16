import {Router} from "express"
import {bookFlight, getAllFlights} from "../controllers/bookController.js"
import { verifyJWT } from "../middlewares/auth.middleware.js"

const router = Router();
router.use(verifyJWT)
// router.use(protect)
router.route("/")
  .get(getAllFlights)
  .post(verifyJWT, bookFlight);

export default router
