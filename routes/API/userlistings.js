const router = require("express").Router();
const userListingController = require("../../controllers/userListingController");

router.route("/")
  .get(userListingController.findAll)
  .post(userListingController.create);

router.route("/:id")
  .get(userListingController.findOne)
  .put(userListingController.update)
  .delete(userListingController.remove);

module.exports = router;