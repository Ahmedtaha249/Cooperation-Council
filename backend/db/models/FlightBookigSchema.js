const mongoose = require("mongoose");

const FlightBookigSchema = mongoose.Schema({
  flightId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Flight",
    required: true,
  },

  userId: {

    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  adults: { type: Number },//min:1
  paid:{type:Boolean,default:false,}
});


module.exports = mongoose.model("FlightBookig", FlightBookigSchema);
