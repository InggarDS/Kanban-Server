const router = require('express').Router()
const user = require('./user')
const task = require('./task')
const category = require('./category')

router.use('/user', user)


module.exports = router