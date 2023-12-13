let express = require("express");
let mongoose = require("mongoose");
let apiRoutes = require("./routers/routes");
const bodyParser = require("body-parser");

let app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://mohamedhatem:yywwbb12@cluster0.ddegkxd.mongodb.net/StudentDatabase?retryWrites=true&w=majority"
);

var db = mongoose.connection;

const PORT = process.env.PORT || 3000;
app.get("/", function (req, res) {
  res.send("Express Connected Successfully");
});

app.use("/api", apiRoutes);
app.listen(PORT, function () {
  console.log("Server is running on port " + PORT);
});
