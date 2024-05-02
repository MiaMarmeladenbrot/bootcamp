import { Boat } from "../models/Boats.js";

export function removeBoat(boatId) {
  return Boat.findOneAndDelete(boatId).then((removedBoat) => {
    if (!removedBoat) throw new Error("Recipe with this id doesn't exist!");
    else return removedBoat;
  });
}
