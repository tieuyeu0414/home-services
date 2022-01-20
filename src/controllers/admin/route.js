const express = require('express');
const route = express();

const adminAPI = require('./api')
route.get('/staff', adminAPI.getDataStaff);
route.post('/login', adminAPI.login);
route.post('/staff/insert',adminAPI.upload , adminAPI.setInsertStaff);
route.put('/staff/edit/:id',adminAPI.upload , adminAPI.setEditStaff);
route.delete('/staff/delete/:id', adminAPI.setDeleteStaff);
route.get('/staff/city', adminAPI.getFilterCityStaff);
route.get('/staff/district', adminAPI.getFilterDistrictStaff);
route.get('/staff/wards', adminAPI.getFilterWardsStaff);
route.get('/staff/search', adminAPI.getFilterStaff);

module.exports = route;