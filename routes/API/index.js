// Dependencies
const path = require("path");
const router = require("express").Router();
const listingRoutes = require("./listing");
const carRoutes = require("./scrape");
const userlistings = require("./userlistings");

// Defining the listing routes
router.use("/listings", listingRoutes);
router.use("/scrape", carRoutes);
router.use("/userlisting", userlistings);

router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../../client/build/index.html"))
});

module.exports = router;