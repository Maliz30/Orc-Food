const router = require('express').Router()

const admController = require('../controllers/admController')

// middlewate
const verifyToken = require('../helpers/verify-token')

router.route("/adm/register").post((req, res) => admController.register(req, res))
router.route("/adm/login").post((req, res) => admController.login(req, res))
router.route("/adm/checkadm").get((req, res) => admController.checkAdm(req, res))
router.route("/adm/:id").get((req, res) => admController.getAdmById(req, res))

// Testando middleware do token
/* router.route("/adm/edit/:id").patch(verifyToken, (req, res) => admController.edit(req, res)) */

module.exports = router
