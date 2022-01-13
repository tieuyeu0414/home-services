const express = require('express');
const route = express();

const deviceAPI = require('./api')
route.get('/', deviceAPI.getDataDevice);
route.post('/insert', deviceAPI.insertDevice);
route.put('/edit/:id', deviceAPI.updateDevice);
route.delete('/delete/:id', deviceAPI.deleteDevice);

module.exports = route;