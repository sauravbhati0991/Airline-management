import mongoose, {Schema} from "mongoose";
import { type } from "os";

const airportSchema = mongoose.Schema({
  officialName: {
    type: String,
    requried: true
  },
  flights: {
    type: Schema.Types.ObjectId,
    ref: "Flight"
  }
})

export const Airport = mongoose.model("Airport", airportSchema)