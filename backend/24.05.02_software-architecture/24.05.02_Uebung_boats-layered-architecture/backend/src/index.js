import express from "express";
import morgan from "morgan";
import cors from "cors";
import { body, param, validationResult } from "express-validator";

import { Reservation } from "./models/Reservations.js";
import { connectToDatabase } from "./models/connectDb.js";
import { BoatsService, ReservationsService } from "./service/index.js";

const app = express();

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

//* Endpoints Boats
// GET all boats
app.get("/api/v1/boats", (_, res) => {
  BoatsService.showAllBoats()
    .then((boats) => res.json(boats))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not get all boats" });
    });
});

// GET one boat
app.get("/api/v1/boats/:boatId", (req, res) => {
  const boatId = req.params.boatId;

  BoatsService.showBoatDetails(boatId)
    .then((foundBoat) => res.json(foundBoat))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ err, message: "Could not find this boat", boatId });
    });
});

// POST new boat
app.post(
  "/api/v1/boats",
  body("boatName").isString().notEmpty(),
  body("constructionYear").isInt(),
  body("serialNumber").isInt(),
  (req, res) => {
    const validationError = validationResult(req);
    if (!validationError.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Data not valid", validationError });
    }

    const newBoat = {
      boatName: req.body.boatName,
      constructionYear: req.body.constructionYear,
      serialNumber: req.body.serialNumber,
      material: req.body.material,
      boatType: req.body.boatType,
    };

    BoatsService.addBoat(newBoat)
      .then((addedBoat) => res.json(addedBoat || {}))
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err, message: "Could not add new boat" });
      });
  }
);

// PATCH one boat
app.patch(
  "/api/v1/boats/:boatId",
  body("boatName").isString().notEmpty(),
  body("constructionYear").isInt(),
  body("serialNumber").isInt(),
  body("material").isString().notEmpty(),
  body("boatType").isString().notEmpty(),
  (req, res) => {
    const validationError = validationResult(req);
    if (!validationError.isEmpty()) {
      return res
        .status(400)
        .json({ message: "Data not valid", validationError });
    }

    const boatId = req.params.boatId;
    const updateBoatInfo = {
      boatName: req.body.boatName,
      constructionYear: req.body.constructionYear,
      serialNumber: req.body.serialNumber,
      material: req.body.material,
      boatType: req.body.boatType,
    };

    BoatsService.editBoat(boatId, updateBoatInfo)
      .then((updatedBoat) => res.json(updatedBoat || {}))
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .json({ err, message: "Could not update this boat", boatId });
      });
  }
);

// DELETE one boat
app.delete("/api/v1/boats/:boatId", (req, res) => {
  const boatId = req.params.boatId;

  BoatsService.removeBoat(boatId)
    .then((deletedBoat) => res.json(deletedBoat || {}))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ err, message: "Could not delete this boat", boatId });
    });
});

//* Endpoints Reservations
// GET all reservations
app.get("/api/v1/reservations", (_, res) => {
  ReservationsService.showAllReservations()
    .then((reservations) => res.json(reservations))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not get all reservations" });
    });
});

// POST new reservation
app.post(
  "/api/v1/boats/:boatId/reservations",
  body("startDate").isString(),
  body("endDate").isString(),
  (req, res) => {
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

    ReservationsService.addReservation(newReservation)
      .then((addedReservation) => res.json(addedReservation || {}))
      .catch((err) => {
        console.log(err);
        res.status(500).json({ err, message: "Could not add new reservation" });
      });
  }
);

// PATCH one reservation
app.patch(
  "/api/v1/reservations/:reservationId",

  (req, res) => {
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

    ReservationsService.editReservation(reservationId, updateReservationInfo)
      .then((updatedReservation) => res.json(updatedReservation || {}))
      .catch((err) => {
        console.log(err);
        res
          .status(500)
          .json({ err, message: "Could not update this boat", reservationId });
      });
  }
);

// DELETE one reservation
app.delete("/api/v1/reservations/:reservationId", (req, res) => {
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
});

// connection to database via connectDb.js
connectToDatabase()
  .then(() => {
    const PORT = 3003;
    app.listen(PORT, () => console.log("Server listening at PORT", PORT));
  })
  .catch((err) => {
    console.log(err);
    process.exit();
  });
