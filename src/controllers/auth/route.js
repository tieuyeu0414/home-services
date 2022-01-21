const express = require('express');
const route = express();

const login = require('./login')
route.post('/', login.login);

module.exports = route;