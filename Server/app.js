var express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
var app = express();
var logger = require("morgan");
// const session = require("express-session");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(express.json());
app.use(logger("dev"));

var accountRouter = require("./router/account");

app.use("/", accountRouter);

app.use((req, res, next) => {
  res.status(404).send("없어");
});
// app.use(session(sessionOption));

const PORT = 3006;
app.listen(PORT, function (err) {
  if (err) console.log("Error in server setup");
  console.log("Server listening on Port", PORT);
});
