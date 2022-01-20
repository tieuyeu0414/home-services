const express = require('express');
const route = express();

const customerAPI = require('./api')

route.post('/insert',customerAPI.upload , customerAPI.setInsertCustomer)
route.put('/edit/:id',customerAPI.upload, customerAPI.setEditCustomer)
route.delete('/delete/:id', customerAPI.setDeleteCustomer)
route.get('/city/:namefilter', customerAPI.getFilterCityCustomer)
route.get('/district/:namefilter', customerAPI.getFilterDistrictCustomer)
route.get('/wards/:namefilter', customerAPI.getFilterWardsCustomer)
route.get('/search', customerAPI.getFilterCustomer)
route.get('/', customerAPI.getDataCustomer)

module.exports = route;