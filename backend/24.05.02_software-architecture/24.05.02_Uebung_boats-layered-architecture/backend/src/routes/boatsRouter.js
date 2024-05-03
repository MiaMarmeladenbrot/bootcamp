import express from "express";
import { BoatsController } from "../controllers/boatsController.js";
import { body, param, validationResult } from "express-validator";

export const boatsRouter = express
  .Router()
  .get("/api/v1/boats", BoatsController.getAllBoatsCtrl)
  .get("/api/v1/boats/:boatId", BoatsController.getOneBoatCtrl)
  .post(
    "/api/v1/boats",
    body("boatName").isString().notEmpty(),
    body("constructionYear").isInt(),
    body("serialNumber").isInt(),
    BoatsController.postCreateNewBoatCtrl
  )
  .patch(
    "/api/v1/boats/:boatId",
    body("boatName").isString().notEmpty(),
    body("constructionYear").isInt(),
    body("serialNumber").isInt(),
    body("material").isString().notEmpty(),
    body("boatType").isString().notEmpty(),
    BoatsController.patchUpdateBoatCtrl
  )
  .delete("/api/v1/boats/:boatId", BoatsController.deleteOneBoactCtrl);
