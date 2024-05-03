import { Reservation } from "../models/Reservations.js";

export async function removeReservation(reservationId) {
  const removedRes = await Reservation.findByIdAndDelete(reservationId);
  if (!removedRes) throw new Error("This Reservation doesn't exist.");

  return removedRes;
}
