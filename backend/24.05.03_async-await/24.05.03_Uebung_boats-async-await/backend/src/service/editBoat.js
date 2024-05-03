import { Boat } from "../models/Boats.js";

export async function editBoat(boatId, updateBoatInfo) {
  const foundBoat = await Boat.findOne({ boatName: updateBoatInfo.boatName });
  if (foundBoat) throw new Error("Boat with this name already exists");

  const editedBoat = await Boat.findByIdAndUpdate(
    boatId,
    { $set: updateBoatInfo },
    { new: true }
  );

  return editedBoat;
}
