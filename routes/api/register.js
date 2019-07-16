const router = require('express').Router();
const bellyFullController = require("../../controllers/bellyFullController");

router.route("/")
.get(bellyFullController.findAll)
.post(bellyFullController.create);

router
.route("/:id")
.get(bellyFullController.findById)
.put(bellyFullController.update)
.delete(bellyFullController.remove)

module.exports = router;