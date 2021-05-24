const Appointments = require("../../db/models/appointment");

module.exports.getAllAppointments = (req, res, next) => {
  Appointments.find().then((result) => {
    res.send({ data: result });
  });
};

module.exports.createNewAppointment = (req, res, next) => {
  const appoint = new Appointments(req.body);
  appoint
    .save()
    .then((result) => {
      res.send({ data: result });
    })
    .catch((error) => {});
};

module.exports.changeAppointment = (req, res, next) => {
  Appointments.updateOne({_id: req.body._id}, req.body).then(result => {
    Appointments.find().then(result => {
      res.send({data: result});
    });
  })
};

module.exports.deleteAppointment = (req, res, next) => {
  Appointments.deleteOne({_id: req.body.id}).then(result => {
    Appointments.find().then(result => {
      res.send({data: result});
    })
  })
};
