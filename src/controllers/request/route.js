const express = require('express');
const route = express();

const requestAPI = require('./api')
route.get('/', requestAPI.getDataRequest);
route.post('/insert', requestAPI.insertRequest);
route.put('/edit/:id', requestAPI.updateRequest);
route.delete('/delete/:id', requestAPI.deleteRequest);

module.exports = route;