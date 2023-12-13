var mongoose = require("mongoose");
const Schema = mongoose.Schema;
const studentSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number },
  classes: [{ type: String, default: [] }],
});

module.exports = mongoose.model("Student", studentSchema);
