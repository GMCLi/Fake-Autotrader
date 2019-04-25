// Dependencies
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");

// Inititalize App
const PORT = process.env.PORT || 3001;
const app = express();

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
  process.env.MONGODB_URI || "mongodb://localhost/listings", {
    useNewUrlParser: true
  }
);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
