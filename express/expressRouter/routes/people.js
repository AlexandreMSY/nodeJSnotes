const express = require('express')
const router = express.Router()
const {getPeople, searchPeople} = require('../controller/controllers')

router.get('/', getPeople)

router.get('/:name', searchPeople)

module.exports = router
