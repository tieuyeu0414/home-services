const express = require('express');
const route = express();

const requestAPI = require('./api')
route.get('/', requestAPI.getDataRequest);

module.exports = route;