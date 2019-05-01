// Dependencies
const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");

// Inititalize App
const PORT = process.env.PORT || 3001;
const app = express();
const routes = require("./routes");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Body Parsing for Axios requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Call Our API Routes
app.use(routes)

// Connect to mongoDB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/FavoriteListing", {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);

// Connecting to port
app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
