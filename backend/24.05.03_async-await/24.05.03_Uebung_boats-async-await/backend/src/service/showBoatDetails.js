import { Boat } from "../models/Boats.js";

export async function showBoatDetails(boatId) {
  const foundBoat = await Boat.findById(boatId);
  if (!foundBoat) throw new Error("Boat does not exist");
  return foundBoat;
}
