const router = require('express').Router()

const admController = require('../controllers/admController')

router.route("/adm/register").post((req, res) => admController.register(req, res))

router.route("/login").post((req, res) => admController.login(req, res))

module.exports = router
