const router = require("express").Router()

const itemRouter = require("./items")

router.use("/", itemRouter)

module.exports = router;