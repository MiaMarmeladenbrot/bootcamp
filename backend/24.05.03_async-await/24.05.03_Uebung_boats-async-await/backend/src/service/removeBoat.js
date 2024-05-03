import { Boat } from "../models/Boats.js";

export async function removeBoat(boatId) {
  const removedBoat = await Boat.findOneAndDelete(boatId);
  if (!removedBoat) throw new Error("Boat with this id doesn't exist.");
  return removedBoat;
}
