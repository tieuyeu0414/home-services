const express = require('express');
const route = express();

const deviceAPI = require('./api')
route.get('/', deviceAPI.getDataDevice);

module.exports = route;