const express = require('express');
const route = express();

const requestAPI = require('./api')
route.get('/', requestAPI.getDataRequest);
route.post('/insert', requestAPI.insertRequest);
route.put('/edit/:id', requestAPI.updateRequest);
route.delete('/delete/:id', requestAPI.deleteRequest);
route.post('/city', requestAPI.getFilterCityRequest)
route.post('/district', requestAPI.getFilterDistrictRequest)
route.post('/wards', requestAPI.getFilterWardsRequest)
route.post('/search', requestAPI.getFilterRequest)
route.post('/status', requestAPI.getFilterStatusRequest)
// route.post('/services/:num/:slug', requestAPI.getFilterServicesRequest)


module.exports = route;