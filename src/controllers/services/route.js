const express = require('express');
const route = express();
const auth = require('../auth/login')

const servicesAPI = require('./api')
const servicesDhAPI = require('./apiDh')
const servicesMlnAPI = require('./apiMln')
const servicesTlAPI = require('./apiTl')
const servicesBnlAPI = require('./apiBnl')
const servicesDvAPI = require('./apiDv')

route.post('/dieu-hoa', auth.checkRoleDh, servicesAPI.getDhServicesRequest)
route.post('/dieu-hoa/city', auth.checkRoleDh, servicesDhAPI.getFilterCityServicesDh)
route.post('/dieu-hoa/district', auth.checkRoleDh, servicesDhAPI.getFilterDistrictServicesDh)
route.post('/dieu-hoa/wards', auth.checkRoleDh, servicesDhAPI.getFilterWardsServicesDh)
route.post('/dieu-hoa/search', auth.checkRoleDh, servicesDhAPI.getFilterServicesDh)
route.post('/dieu-hoa/status', auth.checkRoleDh, servicesDhAPI.getFilterStatusServicesDh)

route.post('/may-loc-nuoc', auth.checkRoleMnl, servicesAPI.getMlnServicesRequest)
route.post('/may-loc-nuoc/city', auth.checkRoleMnl, servicesMlnAPI.getFilterCityServicesMln)
route.post('/may-loc-nuoc/district', auth.checkRoleMnl, servicesMlnAPI.getFilterDistrictServicesMln)
route.post('/may-loc-nuoc/wards', auth.checkRoleMnl, servicesMlnAPI.getFilterWardsServicesMln)
route.post('/may-loc-nuoc/search', auth.checkRoleMnl, servicesMlnAPI.getFilterServicesMln)
route.post('/may-loc-nuoc/status', auth.checkRoleMnl, servicesMlnAPI.getFilterStatusServicesMln)

route.post('/tu-lanh',auth.checkRoleTl, servicesAPI.getTlServicesRequest)
route.post('/tu-lanh/city', auth.checkRoleTl, servicesTlAPI.getFilterCityServicesTl)
route.post('/tu-lanh/district', auth.checkRoleTl, servicesTlAPI.getFilterDistrictServicesTl)
route.post('/tu-lanh/wards', auth.checkRoleTl, servicesTlAPI.getFilterWardsServicesTl)
route.post('/tu-lanh/search', auth.checkRoleTl, servicesTlAPI.getFilterServicesTl)
route.post('/tu-lanh/status', auth.checkRoleTl, servicesTlAPI.getFilterStatusServicesTl)

route.post('/binh-nong-lanh',auth.checkRoleBnl, servicesAPI.getBnlServicesRequest)
route.post('/binh-nong-lanh/city', auth.checkRoleBnl, servicesBnlAPI.getFilterCityServicesBnl)
route.post('/binh-nong-lanh/district', auth.checkRoleBnl, servicesBnlAPI.getFilterDistrictServicesBnl)
route.post('/binh-nong-lanh/wards', auth.checkRoleBnl, servicesBnlAPI.getFilterWardsServicesBnl)
route.post('/binh-nong-lanh/search', auth.checkRoleBnl, servicesBnlAPI.getFilterServicesBnl)
route.post('/binh-nong-lanh/status', auth.checkRoleBnl, servicesBnlAPI.getFilterStatusServicesBnl)

route.post('/dich-vu',auth.checkRoleDv, servicesAPI.getDvServicesRequest)
route.post('/dich-vu/city', auth.checkRoleDv, servicesDvAPI.getFilterCityServicesDv)
route.post('/dich-vu/district', auth.checkRoleDv, servicesDvAPI.getFilterDistrictServicesDv)
route.post('/dich-vu/wards', auth.checkRoleDv, servicesDvAPI.getFilterWardsServicesDv)
route.post('/dich-vu/search', auth.checkRoleDv, servicesDvAPI.getFilterServicesDv)
route.post('/dich-vu/status', auth.checkRoleDv, servicesDvAPI.getFilterStatusServicesDv)

module.exports = route;