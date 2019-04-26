const router = require("express").Router();
const carResults = require("../controllers/scrapeController");

router.get("/api/scrape", function(req, res) {
  carResults
    .carScrape()
    .then(function(results) {
      res.json(results);
    })
    .catch(function(err) {
      res.json(err);
    });
});

module.exports = router;
