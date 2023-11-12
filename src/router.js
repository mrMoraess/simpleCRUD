const userControllers = require('./controllers/userController')
const express = require('express')
const router = express.Router()

router.get('/test', userControllers.getAll)

module.exports = router