const express = require('express');
const route = express();

const customerAPI = require('./api')
route.get('/', customerAPI.getDataCustomer)

module.exports = route;