import { Boat } from "../models/Boats.js";

export function addBoat(newBoat) {
  return Boat.create(newBoat);
}
