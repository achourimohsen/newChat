const userMessage = require("../controller/messageController")
const express = require("express")
const router = express.Router()


router.get("/gets", userMessage.gets)

module.exports = router