const express = require('express')
const router = express.Router()

const ControllersTours = require('../controllers/User')

router.get('/', ControllersTours.findAll)
router.get('/:id', ControllersTours.findById)
router.post('/', ControllersTours.create)
router.delete('/:id', ControllersTours.removeTour)
router.patch('/:id', ControllersTours.updateTour)

module.exports = router
