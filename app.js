var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

//connexion à la DB initiée depuis app.js
require("./models/connection");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var tripsRouter = require("./routes/trips");
var selectionsRouter = require("./routes/selections");

var app = express();

//ajout libraire CORS pour autoriser accès du front
const cors = require("cors");
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/trips", tripsRouter);
app.use("/selections", selectionsRouter);

module.exports = app;
