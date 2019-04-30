const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./API");

router.use("/api", apiRoutes);

// If no routes hit
router.use((req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
})

module.exports = router;