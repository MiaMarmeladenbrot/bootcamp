import { Boat } from "../models/Boats.js";

export function showAllBoats() {
  return Boat.find({});
}
