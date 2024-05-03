import { ReservationsService } from "../service/index.js";
import { body, param, validationResult } from "express-validator";

function getAllReservationsCtrl(_, res) {
  ReservationsService.showAllReservations()
    .then((reservations) => res.json(reservations))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not get all reservations" });
    });
}

function postCreateReservationCtrl(req, res) {
  const validationError = validationResult(req);
  if (!validationError.isEmpty()) {
    return res.status(400).json({ message: "Data not valid", validationError });
  }

  const newReservation = {
    boatId: req.params.boatId,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  };

  ReservationsService.addReservation(newReservation)
    .then((addedReservation) => res.json(addedReservation || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not add new reservation" });
    });
}

function patchUpdateReservationCtrl(req, res) {
  const validationError = validationResult(req);
  if (!validationError.isEmpty()) {
    return res.status(400).json({ message: "Data not valid", validationError });
  }

  const reservationId = req.params.reservationId;
  const updateReservationInfo = {
    startDate: req.body.startDate,
    endDate: req.body.endDate,
  };

  ReservationsService.editReservation(reservationId, updateReservationInfo)
    .then((updatedReservation) => res.json(updatedReservation || {}))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ err, message: "Could not update this boat", reservationId });
    });
}

function deleteReservationCtrl(req, res) {
  const reservationId = req.params.reservationId;

  ReservationsService.removeReservation(reservationId)
    .then((deletedReservation) => res.json(deletedReservation || {}))
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        err,
        message: "Could not delete this reservation",
        reservationId,
      });
    });
}
export const ReservationsController = {
  getAllReservationsCtrl,
  postCreateReservationCtrl,
  patchUpdateReservationCtrl,
  deleteReservationCtrl,
};
