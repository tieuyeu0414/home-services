const express = require('express');
const route = express();

const customerAPI = require('./api')

route.post('/insert', customerAPI.setInsertCustomer)
route.put('/edit/:id', customerAPI.setEditCustomer)
route.delete('/delete/:id', customerAPI.setDeleteCustomer)
route.get('/city', customerAPI.getFilterCityCustomer)
route.get('/district', customerAPI.getFilterDistrictCustomer)
route.get('/wards', customerAPI.getFilterWardsCustomer)
route.get('/search', customerAPI.getFilterCustomer)
route.get('/', customerAPI.getDataCustomer)

module.exports = route;