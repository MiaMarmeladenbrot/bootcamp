import express from "express";
import { ReservationsController } from "../controllers/reservationsController.js";
import { body, param, validationResult } from "express-validator";

export const reservationsRouter = express
  .Router()
  .get("/api/v1/reservations", ReservationsController.getAllReservationsCtrl)
  .post(
    "/api/v1/boats/:boatId/reservations",
    body("startDate").isString(),
    body("endDate").isString(),
    ReservationsController.postCreateReservationCtrl
  )
  .patch(
    "/api/v1/reservations/:reservationId",
    ReservationsController.patchUpdateReservationCtrl
  )
  .delete(
    "/api/v1/reservations/:reservationId",
    ReservationsController.deleteReservationCtrl
  );
