const express = require('express');
const route = express();

const deviceAPI = require('./api')

route.post('/insert', deviceAPI.insertDevice);
route.put('/edit/:id', deviceAPI.updateDevice);
route.delete('/delete/:id', deviceAPI.deleteDevice);
route.post('/search', deviceAPI.getFilterDevice);
// route.get('/getDevice', deviceAPI.getDataDevice);
route.get('/', deviceAPI.getDataRow);

module.exports = route;