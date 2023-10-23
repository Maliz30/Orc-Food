const router = require("express").Router()

const itemController = require("../controllers/itemController")

router.route("/items").post((req, res) => itemController.create(req, res))

module.exports = router;