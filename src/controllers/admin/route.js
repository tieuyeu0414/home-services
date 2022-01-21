const express = require('express');
const route = express();

const adminAPI = require('./api')
route.get('/staff', adminAPI.getDataStaff);
route.post('/login', adminAPI.login);
route.post('/staff/insert',adminAPI.upload , adminAPI.setInsertStaff);
route.put('/staff/edit/:id',adminAPI.upload , adminAPI.setEditStaff);
route.delete('/staff/delete/:id', adminAPI.setDeleteStaff);
route.post('/staff/city', adminAPI.getFilterCityStaff);
route.post('/staff/district', adminAPI.getFilterDistrictStaff);
route.post('/staff/wards', adminAPI.getFilterWardsStaff);
route.post('/staff/search', adminAPI.getFilterStaff);

module.exports = route;