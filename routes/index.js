const path = require("path");
const router = require("express").Router();
const apiRoutes = require("./api");

// Set up our API Routes using express middleware
router.use("/api", apiRoutes);


// Sets home route to localhost:3000/api/




// error handling: if no API routes are hit, send the React app back to the user:
router.use((req, res) =>{
    res.sendfile(path.join(__dirname, "../client/build/index.html"))
});


module.exports = router;