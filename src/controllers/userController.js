const models = require('../models/userModel')

const getName = (req, res) => {
    res.status(200).json(models.getName())
}

module.exports = {
    getName,
}