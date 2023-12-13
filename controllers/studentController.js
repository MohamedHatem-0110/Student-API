const Student = require("../models/studentModel");
exports.index = async function (req, res) {
  try {
    const students = await Student.find();
    res.json({ status: 200, data: students });
  } catch (err) {
    res.send(err);
  }
};
exports.new = async function (req, res) {
  try {
    const { name, age } = req.body;
    const student = await Student.create({ name, age });
    res.json({ status: 200, data: student });
  } catch (err) {
    res.send(err);
  }
};

exports.view = async function (req, res) {
  try {
    const student = await Student.findById(req.params.student_id);
    if (student) res.json({ status: 200, data: student });
    else res.send({ status: 404, message: "User Not Found." });
  } catch (err) {
    res.send(err);
  }
};
exports.update = async function (req, res) {
  try {
    const student = await Student.findByIdAndUpdate(
      req.params.student_id,
      req.body,
      { new: true }
    );
    if (student) res.send({ status: 200, data: student });
    else res.send({ status: 404, message: "User Not Found." });
  } catch (err) {
    res.send(err);
  }
};

exports.delete = async function (req, res) {
  try {
    const student = await Student.deleteOne({ _id: req.params.student_id });
    if (student) res.send({ status: 200, message: "Deleted Successfully" });
    else res.send({ status: 404, message: "User Not Found." });
  } catch (err) {
    res.send(err);
  }
};

exports.deleteAll = async function (req, res) {
  try {
    await Student.deleteMany();
    res.json({ status: 200, message: "All users are deleted" });
  } catch (err) {
    res.send(err);
  }
};
