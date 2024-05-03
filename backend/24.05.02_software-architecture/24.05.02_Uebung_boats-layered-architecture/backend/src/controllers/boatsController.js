import { BoatsService } from "../service/index.js";
import { body, param, validationResult } from "express-validator";

function getAllBoatsCtrl(_, res) {
  BoatsService.showAllBoats()
    .then((boats) => res.json(boats))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ err, message: "Could not get all boats" });
    });
}

function getOneBoatCtrl(req, res) {
  const boatId = req.params.boatId;

  BoatsService.showBoatDetails(boatId)
    .then((foundBoat) => res.json(foundBoat))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ err, message: "Could not find this boat", boatId });
    });
}

function postCreateNewBoatCtrl(req, res) {
  const validationError = validationResult(req);
  if (!validationError.isEmpty()) {
    return res.status(400).json({ message: "Data not valid", validationError });
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

function patchUpdateBoatCtrl(req, res) {
  const validationError = validationResult(req);
  if (!validationError.isEmpty()) {
    return res.status(400).json({ message: "Data not valid", validationError });
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

function deleteOneBoactCtrl(req, res) {
  const boatId = req.params.boatId;

  BoatsService.removeBoat(boatId)
    .then((deletedBoat) => res.json(deletedBoat || {}))
    .catch((err) => {
      console.log(err);
      res
        .status(500)
        .json({ err, message: "Could not delete this boat", boatId });
    });
}

export const BoatsController = {
  getAllBoatsCtrl,
  getOneBoatCtrl,
  postCreateNewBoatCtrl,
  patchUpdateBoatCtrl,
  deleteOneBoactCtrl,
};
