const express = require("express");
const router = express.Router();

const {
  getAllUsers,
  createNewUser,
  checkUser,
  deleteUser,
} = require("../controllers/user.controllers");

router.get("/allUsers", getAllUsers);
router.post("/createUser", createNewUser);
router.post("/checkUser", checkUser);
router.delete("/deleteUser", deleteUser);

const {
  getAllAppointments,
  createNewAppointment,
  changeAppointment,
  deleteAppointment,
} = require("../controllers/appointment.controllers");

router.get("/getAllAppointments", getAllAppointments);
router.post("/createNewAppointment", createNewAppointment);
router.patch("/changeAppointment", changeAppointment);
router.delete("/deleteAppointment", deleteAppointment);

module.exports = router;
