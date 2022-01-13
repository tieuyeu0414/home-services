const express = require('express');
const route = express();

const customerAPI = require('./api')
route.get('/', customerAPI.getDataCustomer)
route.post('/insert', customerAPI.setInsertCustomer)
route.put('/edit/:id', customerAPI.setEditCustomer)
route.delete('/delete/:id', customerAPI.setDeleteCustomer)

module.exports = route;