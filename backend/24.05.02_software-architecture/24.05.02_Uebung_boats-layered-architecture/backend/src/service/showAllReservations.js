import { Reservation } from "../models/Reservations.js";

export function showAllReservations() {
  return Reservation.find({});
}
