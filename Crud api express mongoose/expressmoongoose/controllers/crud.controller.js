const User = require("../models/User");

const getData = (req, res) => {
  User.find()
    .then((data) => {
      console.log(data);
      res.json({
        message: "Success",
        data: data,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const saveData = (req, res) => {
  const user = new User(req.body);

  user
    .save()
    .then((result) => {
      res.json({
        message: "Success",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const updateOneData = (req, res) => {
  User.updateOne(
    { _id: req.body._id },
    { $set: { email: req.body.email, name: req.body.name } }
  )
    .then((result) => {
      res.json({
        message: "Update Success",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

const deleteOneData = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then((result) => {
      res.json({
        message: "SuccessFully Deleted",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  getData,
  saveData,
  updateOneData,
  deleteOneData,
};
