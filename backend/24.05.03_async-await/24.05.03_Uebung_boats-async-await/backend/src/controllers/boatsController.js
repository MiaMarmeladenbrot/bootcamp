import { BoatsService } from "../service/index.js";
import { validationResult } from "express-validator";

async function getAllBoatsCtrl(_, res) {
  try {
    const boats = await BoatsService.showAllBoats();
    res.json(boats);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not get all boats" });
  }
}

async function getOneBoatCtrl(req, res) {
  try {
    const boatId = req.params.boatId;

    const foundBoat = await BoatsService.showBoatDetails(boatId);
    res.json(foundBoat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not find this boat", boatId });
  }
}

async function postCreateNewBoatCtrl(req, res) {
  try {
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

    const addedBoat = await BoatsService.addBoat(newBoat);
    res.json(addedBoat);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err, message: "Could not add new boat" });
  }
}

async function patchUpdateBoatCtrl(req, res) {
  try {
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

    const updatedBoat = await BoatsService.editBoat(boatId, updateBoatInfo);
    res.json(updatedBoat);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: "Could not update this boat", boatId });
  }
}

async function deleteOneBoactCtrl(req, res) {
  try {
    const boatId = req.params.boatId;

    const deletedBoat = await BoatsService.removeBoat(boatId);
    res.json(deletedBoat);
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ err, message: "Could not delete this boat", boatId });
  }
}

export const BoatsController = {
  getAllBoatsCtrl,
  getOneBoatCtrl,
  postCreateNewBoatCtrl,
  patchUpdateBoatCtrl,
  deleteOneBoactCtrl,
};
