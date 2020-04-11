const router = require('express').Router()
const controller = require('../controllers/category')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorizationCategory')

router.use(authentication)
router.post('/category', controller.create)
router.get('/category', controller.read)

router.put('/category/:id', authorization,controller.update)
router.delete('/category/:id', authorization,controller.delete)

module.exports = router