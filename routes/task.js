const router = require('express').Router()
const controller = require('../controllers/task')
const authentication = require('../middleware/authentication')
const authorization = require('../middleware/authorization')

router.use(authentication)
router.get('/tasks', controller.read)
router.post('/tasks', controller.create)

router.put('/tasks/:id', authorization,controller.update)
router.delete('/tasks/:id', authorization,controller.delete)


module.exports = router