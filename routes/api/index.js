const router = require("express").Router();
const foodRoutes = require("./food");

//food routes
router.use("/food", foodRoutes);

// If you want to add more routes for something else:
// router.use("/example", exampleRoutes); 

module.exports = router;