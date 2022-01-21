const express = require('express');
const route = express();

const customerAPI = require('./api')

route.post('/insert',customerAPI.upload , customerAPI.setInsertCustomer)
route.put('/edit/:id',customerAPI.upload, customerAPI.setEditCustomer)
route.delete('/delete/:id', customerAPI.setDeleteCustomer)
route.post('/city', customerAPI.getFilterCityCustomer)
route.post('/district', customerAPI.getFilterDistrictCustomer)
route.post('/wards', customerAPI.getFilterWardsCustomer)
route.post('/search', customerAPI.getFilterCustomer)
route.post('/', customerAPI.getDataCustomer)

module.exports = route;