const express = require('express');
const route = express();

const customerAPI = require('./api')
route.get('/', customerAPI.getDataCustomer)
route.get('/insert', customerAPI.setInsertCustomer)
route.get('/edit/:id', customerAPI.setEditCustomer)
route.get('/delete/:id', customerAPI.setDeleteCustomer)

module.exports = route;