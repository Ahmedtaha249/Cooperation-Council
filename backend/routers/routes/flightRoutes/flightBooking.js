const express = require("express");
const flightBookingRouter = express.Router();

const {
  getFlightsBookingByUserId,
  creatFlightBooking,
  deleteFlightBooking,
  getAllFlightsBooking,
  updateFlightBooking,
  isBookingExist,
  isFlightFit,
} = require("../../controllers/flight/flightBookingController");
const {
  updateFlightCapacity,
} = require("../../controllers/flight/flightController");

flightBookingRouter.post("/", creatFlightBooking);
flightBookingRouter.delete("/:bookingId", deleteFlightBooking);
flightBookingRouter.get("/allBooking/:userId", getFlightsBookingByUserId);
flightBookingRouter.get("/allBooking/", getAllFlightsBooking);
flightBookingRouter.put(
  "/:bookingId",
  isBookingExist,
  isFlightFit,
  updateFlightCapacity,
  updateFlightBooking
);

module.exports = flightBookingRouter;
