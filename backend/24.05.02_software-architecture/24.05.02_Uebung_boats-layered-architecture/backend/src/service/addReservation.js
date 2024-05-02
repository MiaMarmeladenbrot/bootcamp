import { Reservation } from "../models/Reservations.js";

export function addReservation(newReservation) {
  return Reservation.create(newReservation);
}
