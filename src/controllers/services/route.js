const express = require('express');
const route = express();

const servicesAPI = require('./api')
route.post('/dieu-hoa', servicesAPI.getDhServicesRequest)
route.post('/may-loc-nuoc', servicesAPI.getMlnServicesRequest)
route.post('/tu-lanh', servicesAPI.getTlServicesRequest)
route.post('/binh-nong-lanh', servicesAPI.getBnlServicesRequest)
route.post('/dich-vu', servicesAPI.getDvServicesRequest)


module.exports = route;