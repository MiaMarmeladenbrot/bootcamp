import { Reservation } from "../models/Reservations.js";

export async function showAllReservations() {
  const reservations = await Reservation.find({});
  return reservations;
}
