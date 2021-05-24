const mongoose = require("mongoose");

const { Schema } = mongoose;

const appointmentSchema = new Schema({
  name: String,
  doctor: String,
  date: Date,
  complaint: String,
});

module.exports = Appointments = mongoose.model(
  "appointments",
  appointmentSchema
);
