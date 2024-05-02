import { Reservation } from "../models/Reservations.js";

export function removeReservation(reservationId) {
  return Reservation.findByIdAndDelete(reservationId).then((removedRes) => {
    if (!removedRes) {
      throw new Error("This Reservation doesn't exist.");
    } else {
      return removedRes;
    }
  });
}
