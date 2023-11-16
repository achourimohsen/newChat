const userController = require("../controller/authController")
const express = require("express")
const router = express.Router()


router.post("/signUp", userController.signUp)
router.post("/signIn", userController.signIn)

module.exports = router