import { ReservationsService } from "../service/index.js";
import { validationResult } from "express-validator";

async function getAllReservationsCtrl(_, res) {
  try {
    const reservations = await ReservationsService.showAllReservations();
    res.json(reservations);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not get all reservations" });
  }
}

async function postCreateReservationCtrl(req, res) {
  try {
    const validationError = validationResult(req);
    if (!validationError.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Data not valid", validationError });
    }
    const newReservation = {
      boatId: req.params.boatId,
      startDate: req.body.startDate,
      endDate: req.body.endDate,
    };

    const addedReservation = await ReservationsService.addReservation(
      newReservation
    );
    res.json(addedReservation);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add new reservation" });
  }
}

async function patchUpdateReservationCtrl(req, res) {
  try {
    const validationError = validationResult(req);
    if (!validationError.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Data not valid", validationError });
    }

    const reservationId = req.params.reservationId;
    const updateReservationInfo = {
      startDate: req.body.startDate,
      endDate: req.body.endDate,
    };

    const updatedReservation = await ReservationsService.editReservation(
      reservationId,
      updateReservationInfo
    );
    res.json(updatedReservation || {});
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: "Could not update this boat", reservationId });
  }
}

async function deleteReservationCtrl(req, res) {
  try {
    const reservationId = req.params.reservationId;

    const deletedReservation = await ReservationsService.removeReservation(
      reservationId
    );
    res.json(deletedReservation);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      err,
      message: "Could not delete this reservation",
      reservationId,
    });
  }
}

export const ReservationsController = {
  getAllReservationsCtrl,
  postCreateReservationCtrl,
  patchUpdateReservationCtrl,
  deleteReservationCtrl,
};
