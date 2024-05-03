import { Boat } from "../models/Boats.js";
import { Reservation } from "../models/Reservations.js";

export async function addReservation(newReservation) {
  const foundBoat = await Boat.findById(newReservation.boatId);
  if (!foundBoat) throw new Error("This boat does not exist");

  return Reservation.create(newReservation);
}
