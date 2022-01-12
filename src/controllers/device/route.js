const express = require('express');
const route = express();

const deviceAPI = require('./api')
route.get('/', deviceAPI.getDataDevice);
route.post('/insert', deviceAPI.insertDevice);
// route.put('/edit/:id', customerAPI.setEditCustomer);
// route.delete('/delete/:id', customerAPI.setDeleteCustomer);

module.exports = route;