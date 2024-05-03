import { Boat } from "../models/Boats.js";

export async function showAllBoats() {
  const boats = await Boat.find({});
  return boats;
}
