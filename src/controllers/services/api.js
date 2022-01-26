const Senquelize = require("sequelize");
const Staff = require("../admin/models/staff");
const Customer = require("../customer/models/customer");
const Device = require("../device/models/device");
const Request = require("../request/models/request");
const utils = require('../utils');

async function getDhServicesRequest(req, res) {
    try {
        // let services = req.params.num;
        let {page, limit} = utils.pagination(req.query, 10)
        await Request.findAndCountAll({
            include: [
                { 
                    model: Customer, 
                    attributes:['name','city', 'district','wards','detailAddress'],
                },
                { model: Device, attributes:['deviceId'] },
                { model: Staff, attributes:['staffId'] },
            ],
            attributes:['id','services', 'note','status', 'customerPhone'],
            where: {
                services: 1
            },
            offset: page,
            limit: limit
        })
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    } catch (e) {
        console.log(e);
    }
}

async function getMlnServicesRequest(req, res) {
    try {
        // let services = req.params.num;
        let {page, limit} = utils.pagination(req.query, 10)
        await Request.findAndCountAll({
            include: [
                { 
                    model: Customer, 
                    attributes:['name','city', 'district','wards','detailAddress'],
                },
                { model: Device, attributes:['deviceId'] },
                { model: Staff, attributes:['staffId'] },
            ],
            attributes:['id','services', 'note','status', 'customerPhone'],
            where: {
                services: 2
            },
            offset: page,
            limit: limit
        })
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    } catch (e) {
        console.log(e);
    }
}

async function getTlServicesRequest(req, res) {
    try {
        // let services = req.params.num;
        let {page, limit} = utils.pagination(req.query, 10)
        await Request.findAndCountAll({
            include: [
                { 
                    model: Customer, 
                    attributes:['name','city', 'district','wards','detailAddress'],
                },
                { model: Device, attributes:['deviceId'] },
                { model: Staff, attributes:['staffId'] },
            ],
            attributes:['id','services', 'note','status', 'customerPhone'],
            where: {
                services: 3
            },
            offset: page,
            limit: limit
        })
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    } catch (e) {
        console.log(e);
    }
}

async function getBnlServicesRequest(req, res) {
    try {
        // let services = req.params.num;
        let {page, limit} = utils.pagination(req.query, 10)
        await Request.findAndCountAll({
            include: [
                { 
                    model: Customer, 
                    attributes:['name','city', 'district','wards','detailAddress'],
                },
                { model: Device, attributes:['deviceId'] },
                { model: Staff, attributes:['staffId'] },
            ],
            attributes:['id','services', 'note','status', 'customerPhone'],
            where: {
                services: 4
            },
            offset: page,
            limit: limit
        })
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    } catch (e) {
        console.log(e);
    }
}

async function getDvServicesRequest(req, res) {
    try {
        // let services = req.params.num;
        let {page, limit} = utils.pagination(req.query, 10)
        await Request.findAndCountAll({
            include: [
                { 
                    model: Customer, 
                    attributes:['name','city', 'district','wards','detailAddress'],
                },
                { model: Device, attributes:['deviceId'] },
                { model: Staff, attributes:['staffId'] },
            ],
            attributes:['id','services', 'note','status', 'customerPhone'],
            where: {
                services: 5
            },
            offset: page,
            limit: limit
        })
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    } catch (e) {
        console.log(e);
    }
}




module.exports = {
    getDhServicesRequest,
    getMlnServicesRequest,
    getTlServicesRequest,
    getBnlServicesRequest,
    getDvServicesRequest,
}