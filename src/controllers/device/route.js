const express = require('express');
const route = express();

const deviceAPI = require('./api')

route.post('/insert', deviceAPI.insertDevice);
route.put('/edit/:id', deviceAPI.updateDevice);
route.delete('/delete/:id', deviceAPI.deleteDevice);
route.get('/', deviceAPI.getFilterDevice);
route.get('/', deviceAPI.getDataDevice);

module.exports = route;