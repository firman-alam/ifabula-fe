const express = require('express')
const user = require('../controllers/user')

const router = express.Router()

router.route('/').get(user.GetUser).post(user.AddUser)

module.exports = router
