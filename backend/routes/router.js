const router = require("express").Router()

const itemRouter = require("./items")
const admRouter = require('./adm')

router.use("/", itemRouter)
router.use("/", admRouter)

module.exports = router;