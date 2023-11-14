const userControllers = require('./controllers/userController')
const express = require('express')
const router = express.Router()

router.get('/test', userControllers.getName)

module.exports = router