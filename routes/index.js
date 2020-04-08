const router = require('express').Router()
const user = require('./user')
const task = require('./task')
const category = require('./category')

router.use('/', user)
router.use('/', category)
router.use('/', task)


module.exports = router