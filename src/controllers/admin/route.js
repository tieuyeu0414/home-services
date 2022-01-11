const express = require('express');
const route = express();

const adminAPI = require('./api')
route.get('/login', adminAPI.login);

module.exports = route;