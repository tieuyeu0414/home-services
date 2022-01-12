const express = require('express');
const route = express();

const customerAPI = require('./api')
route.get('/', customerAPI.getDataCustomer)
route.get('/insert', customerAPI.setInsertCustomer)

module.exports = route;