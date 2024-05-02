import { Reservation } from "../models/Reservations.js";

export function editReservation(reservationId, updateReservationInfo) {
  return Reservation.findByIdAndUpdate(
    reservationId,
    { $set: updateReservationInfo },
    { new: true }
  );
}
