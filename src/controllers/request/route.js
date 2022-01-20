const express = require('express');
const route = express();

const requestAPI = require('./api')
route.get('/', requestAPI.getDataRequest);
route.post('/insert', requestAPI.insertRequest);
route.put('/edit/:id', requestAPI.updateRequest);
route.delete('/delete/:id', requestAPI.deleteRequest);
route.get('/city', requestAPI.getFilterCityRequest)
route.get('/district', requestAPI.getFilterDistrictRequest)
route.get('/wards', requestAPI.getFilterWardsRequest)
route.get('/search', requestAPI.getFilterRequest)
route.get('/status', requestAPI.getFilterStatusRequest)
route.get('/services', requestAPI.getFilterServicesRequest)


module.exports = route;