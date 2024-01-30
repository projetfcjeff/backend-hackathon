const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://nmazzu:4xtLeE90zCAUFXYk@capsuledb.xc7oo5h.mongodb.net/TICKETHACK";

mongoose
  .connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log("Database connected"))
  .catch((error) => console.error(error));
