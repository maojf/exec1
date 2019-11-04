const express = require('express');
var router = express.Router()
const upLoad = require('./upLoad');
const getFile = require('./getFile');

router.use(upLoad)
router.use(getFile)

module.exports = router;