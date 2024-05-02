import { Boat } from "../models/Boats.js";

export function showBoatDetails(boatId) {
  return Boat.findById(boatId).then((foundBoat) => {
    if (foundBoat) return foundBoat;
    else return null;
  });
}
