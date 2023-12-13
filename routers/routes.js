var express = require("express");
let studentController = require("../controllers/studentController");
var Router = express.Router();

Router.get("/", function (req, res) {
  res.json({ status: "WORKING" });
});

Router.route("/students")
  .get(studentController.index)
  .post(studentController.new)
  .delete(studentController.deleteAll);

Router.route("/students/:student_id")
  .get(studentController.view)
  .put(studentController.update)
  .patch(studentController.update)
  .delete(studentController.delete);

module.exports = Router;
