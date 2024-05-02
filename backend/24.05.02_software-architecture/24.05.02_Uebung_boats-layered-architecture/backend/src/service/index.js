import { addBoat } from "./addBoat.js";
import { addReservation } from "./addReservation.js";
import { editBoat } from "./editBoat.js";
import { editReservation } from "./editReservation.js";
import { removeBoat } from "./removeBoat.js";
import { removeReservation } from "./removeReservation.js";
import { showAllBoats } from "./showAllBoats.js";
import { showAllReservations } from "./showAllReservations.js";
import { showBoatDetails } from "./showBoatDetails.js";

// service-functions for boats
export const BoatsService = {
  showAllBoats,
  showBoatDetails,
  addBoat,
  editBoat,
  removeBoat,
};

// service-functions for reservations
export const ReservationsService = {
  showAllReservations,
  addReservation,
  editReservation,
  removeReservation,
};
