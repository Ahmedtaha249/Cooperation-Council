const flightBookingModle = require("../../../db/models/FlightBookigSchema");
const newFlightModel = require("../../../db/models/flightSchema");

const isBookingExist = (req, res, next) => {
  const { bookingId } = req.params;

  flightBookingModle
    .findOne({ _id: bookingId })
    .then((result, err) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `there is No flight booking with this id ${bookingId}`,
        });
      } else {
        req.body.flightId = result.flightId;
        if (req.method === "DELETE") {
          if (result.userId != req.token.userId) {
            return res.status(403).json({
              success: false,
              message: `The Booking => ${bookingId} is not related for this account you dont have the auth to delete`,
            });
          } else {
            //have the auth
            req.body.capacity = result.adults;
            next();
          }
        } else {
          //PUT
          if (result.userId != req.token.userId) {
            return res.status(403).json({
              success: false,
              message: `The Booking => ${bookingId} is not related for this account you dont have the auth to change`,
            });
          } else {
            //have the auth
            req.lastValueOfAdults = result.adults;
            next();
          }
        }
      }
    })
    .catch((err) => {
      res.status(404).json({
        success: false,
        message: err.message,
      });
    });
};
const isFlightFit = (req, res, next) => {
  let adults = req.body.adults;
  let flightId = req.body.flightId;
  let { lastValueOfAdults } = req;
  if (req.method === "POST") {
    lastValueOfAdults = 0;
  }

  //1: get flight id and last number of adults at the booking from past middleWare
  //2:check if flight fit the new value of adults then edit the flight capacity and edit the booking adults value by next()

  newFlightModel
    .findOne({ _id: flightId })
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `Server Error`,
        });
      } else {
        if (true) {
          if (lastValueOfAdults == adults) {
            return res.status(500).json({
              success: false,
              message: `there is no changes to edit`,
            });
          } else if (lastValueOfAdults < adults) {
            if (result.capacity >= adults - lastValueOfAdults) {
              //more people come
              req.body.flightId = flightId;
              req.body.capacity =
                result.capacity - adults + parseInt(lastValueOfAdults);
              next();
            } else {
              res.status(500).json({
                success: false,
                message: `the flight not fit for the new adults`,
              });
            }
          } else {
            req.body.flightId = flightId;
            req.body.capacity =
              result.capacity - adults + parseInt(lastValueOfAdults);
            next(); //less people come
          }
        }
      }
    })
    .catch((err) => {
      console.log(err.message);

      res.status(404).json({
        success: false,
        message: `Server Error`,
      });
    });
};

const getFlightsBookingByUserId = (req, res) => {
  const { userId } = req.token; 
  flightBookingModle
    .find({userId })

    .populate("userId")
    .populate("flightId")

    .exec()
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `there is No flight booking for the user`,
        });
      } else {
        return res.status(200).json({
          success: true,
          message: `all flights bookings for the user`,
          flights: result,
        });
      }
    });
};
const deleteFlightBooking = (req, res) => {
  const { bookingId } = req.params;
  flightBookingModle
    .findByIdAndDelete(bookingId)
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The Booking => ${bookingId} not found`,
        });
      }
      res.status(200).json({
        success: true,
        message: `Success Delete Booking with id => ${bookingId}`,
      });
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    });
};
const updateFlightBooking = async function (req, res) {
  const { bookingId } = req.params;
  const { adults } = req.body;
  flightBookingModle
    .findByIdAndUpdate(bookingId, { adults }, { new: true })
    .populate("userId", "-_id -password -email -__v")
    .populate("flightId", "-_id -__v")
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `The Booking => ${bookingId} not found`,
        });
      } else {
        res.status(200).json({
          success: true,
          message: `Success update Booking with id => ${bookingId}`,
          newBooking: result,
        });
      }
    })
    .catch((err) => {
      res.status(500).json({
        success: false,
        message: `Server Error`,
      });
    });
};

const creatFlightBooking = (req, res) => {
  const userId = req.token.userId;
  const { flightId, adults } = req.body;
  const newBooking = new flightBookingModle({
    flightId,
    userId,
    adults,
  })
    .save()
    .then((result) => {
      res.status(201);
      res.json({
        success: true,
        message: "new booking created",
        flightsBooking: result,
      });
    })
    .catch((err) => {
      res.status(500);
      console.log(err.message);
      res.json("server error");
    });
};

const getAllFlightsBooking = (req, res) => {
  flightBookingModle
    .find({})
    .populate("userId", "-_id -password -email -__v")
    .populate("flightId", "-_id -__v")
    .exec()
    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `there is no flight booking for any user yet`,
        });
      } else {
        return res.status(200).json({
          success: true,
          message: `all flights bookings for all users`,
          flightsBookings: result,
        });
      }
    });
};

errorMiddle = (err, req, res, next) => {
  res.status(err.status);
  res.json({
    error: {
      status: err.status,
      message: err.message,
    },
  });
};

module.exports = {
  getFlightsBookingByUserId,
  isBookingExist,
  isFlightFit,
  creatFlightBooking,
  getAllFlightsBooking,
  deleteFlightBooking,
  updateFlightBooking,
};
