const express = require('express');
const route = express();
const auth = require('../auth/login')

const servicesAPI = require('./api')
route.post('/dieu-hoa', auth.checkRoleDh, servicesAPI.getDhServicesRequest)
route.post('/may-loc-nuoc', auth.checkRoleMnl, servicesAPI.getMlnServicesRequest)
route.post('/tu-lanh',auth.checkRoleTl, servicesAPI.getTlServicesRequest)
route.post('/binh-nong-lanh',auth.checkRoleBnl, servicesAPI.getBnlServicesRequest)
route.post('/dich-vu',auth.checkRoleDv, servicesAPI.getDvServicesRequest)


module.exports = route;