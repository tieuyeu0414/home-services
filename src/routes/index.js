const express = require('express');
const router = express();

const admin = require('../controllers/admin/route')
router.use('/admin', admin)

const customer = require('../controllers/customer/route')
router.use('/customer', customer)

const device = require('../controllers/device/route')
router.use('/device', device)

const request = require('../controllers/request/route')
router.use('/', request)

module.exports = router;
