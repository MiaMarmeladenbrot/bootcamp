import { Boat } from "../models/Boats.js";

export function editBoat(boatId, updateBoatInfo) {
  return Boat.findByIdAndUpdate(
    boatId,
    { $set: updateBoatInfo },
    { new: true }
  );
}
