const flightModel = require("../../../db/models/flightSchema");
const createNewFlight = (req, res) => {
  const { origin, destination, date } = req.body;
  const newFlight = new flightModel({
    destination: destination,
    origin: origin,
    date: date,
    capacity: 5,
  });
  newFlight
    .save()
    .then((result) => {

      res.status(201).json({ success: true, message: "new flight  created" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json("server error");
    });
};

const getFlights = (req, res) => {
  const { origin, destination, date } = req.body;

  const result = [];

  try {
    const first_result = test_data.filter((elem, i) => {
      return (
        elem.date === date && elem.to === destination && elem.from === origin
      );
    })[0];

    first_result.data.forEach((element, index) => {
      result.push({
        flight_name: element.flight_name,
        price: element.price,
        stops: element.stops,
      });
    });
    res.status(200).json(result);
  } catch (err) {
    res.status(500).json(err);
  }
};
const updateFlightCapacity = (req, res, next) => {
  //get the new capacity wich comming from flightBookingRoute and update the flight with the new vlaue

  const { flightId, capacity } = req.body;

  let newCapacity = { capacity };
  if (req.method === "DELETE")
    newCapacity = {
      $inc: {
        capacity,
      },
    };

  if ((capacity && flightId) || (capacity == 0 && flightId)) {
    flightModel
      .findOneAndUpdate({ _id: flightId }, newCapacity, { new: true })
      .then((result) => {
        if (!result) {
          return res.status(404).json({
            success: false,
            message: `ServerError`,
          });
        }
      })
      .catch((err) => {
        res.status(500).json({
          success: false,
          message: `Server Error`,
        });
      });

    next();
  } else {
    res.status(404).json({
      success: false,
      message: `Server Error`,
    });
  }
};

const getAvailableFlights = (req, res, next) => {
  const { origin, destination, dateFrom, adults, dateTo } = req.body;

  flightModel
    .find({
      date: {
        $gte: dateFrom,
        $lte: dateTo,
      },
      origin,
      destination,
      capacity: {
        $gte: adults,
      },
    })

    .then((result) => {
      if (!result) {
        return res.status(404).json({
          success: false,
          message: `ServerError`,
        });
      } else {
        return res.status(201).json({
          success: true,
          message: `success get flights`,
          flights: result,
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

module.exports = {
  createNewFlight,
  getFlights,
  updateFlightCapacity,
  getAvailableFlights,
};
