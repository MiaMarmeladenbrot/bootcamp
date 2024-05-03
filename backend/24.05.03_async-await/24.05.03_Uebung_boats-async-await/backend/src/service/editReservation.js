import { Reservation } from "../models/Reservations.js";

export async function editReservation(reservationId, updateReservationInfo) {
  const editedReservation = await Reservation.findByIdAndUpdate(
    reservationId,
    { $set: updateReservationInfo },
    { new: true }
  );

  return editedReservation;
}
