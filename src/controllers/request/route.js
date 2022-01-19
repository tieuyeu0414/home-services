const express = require('express');
const route = express();

const requestAPI = require('./api')
route.get('/', requestAPI.getDataRequest);
route.post('/insert', requestAPI.insertRequest);
route.put('/edit/:id', requestAPI.updateRequest);
route.delete('/delete/:id', requestAPI.deleteRequest);
route.get('/city/:namefilter', requestAPI.getFilterCityRequest)
route.get('/district/:namefilter', requestAPI.getFilterDistrictRequest)
route.get('/wards/:namefilter', requestAPI.getFilterWardsRequest)
route.get('/search', requestAPI.getFilterRequest)

module.exports = route;