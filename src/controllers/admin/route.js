const express = require('express');
const route = express();

const adminAPI = require('./api')
route.get('/staff', adminAPI.getDataStaff);
route.post('/login', adminAPI.login);
route.post('/staff/insert', adminAPI.setInsertStaff);
route.put('/staff/edit/:id', adminAPI.setEditStaff);
route.delete('/staff/delete/:id', adminAPI.setDeleteStaff);

module.exports = route;