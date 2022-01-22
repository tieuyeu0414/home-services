const express = require('express');
const router = express();
const auth = require('../controllers/auth/login')

const admin = require('../controllers/admin/route')
router.use('/admin',auth.checkLogin, admin)

const customer = require('../controllers/customer/route')
router.use('/customer',auth.checkLogin,auth.checkRoleAdmin, customer)

const device = require('../controllers/device/route')
router.use('/device',auth.checkLogin, device)

const request = require('../controllers/request/route')
router.use('/request',auth.checkLogin, request)

const login = require('../controllers/auth/route')
router.use('/login', login)

const services = require('../controllers/services/route')
router.use('/services', auth.checkLogin, services)


module.exports = router;
