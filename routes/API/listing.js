// Dependencies
const router = require("express").Router();
const favoriteListingController = require("../../controllers/favoriteListingController");

// Routes to /api/listings
router.route("/")
    .get(favoriteListingController.findAll)
    .post(favoriteListingController.create);

// Routes to /api/listings/:id
router.route("/:id")
    .get(favoriteListingController.findById)
    .put(favoriteListingController.update)
    .delete(favoriteListingController.remove);

module.exports = router;