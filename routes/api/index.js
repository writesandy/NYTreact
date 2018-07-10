const router = require("express").Router();
const nytRoutes = require("./apiRoutes.js");

router.use("/nyt", nytRoutes);

module.exports = router;