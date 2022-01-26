const Senquelize = require("sequelize");
const Staff = require("../admin/models/staff");
const Customer = require("../customer/models/customer");
const Device = require("../device/models/device");
const Request = require("../request/models/request");
const utils = require('../utils');
const Op = Senquelize.Op;
const auth = require('../auth/login')

async function getFilterCityServicesTl(req, res) {
    try {
        let {city} = req.body;
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
            where: {
                [Op.and]: [
                    {'$Customer.city$': city},
                    {services: 3}
                ]
            },
            attributes:['id','services', 'note','status', 'customerPhone'],
            offset: page,
            limit: limit
        })
        .then(result => {
            {
                rows= result.rows.map((item)=>{
                     return {id:item.id,customerPhone:item.customerPhone,
                     services:item.services,
                     note:item.note,
                     deviceId:item.device.deviceId,
                     name:item.customer.name,
                     city:item.customer.city,
                     district:item.customer.district,
                     wards:item.customer.wards,
                     staffId:item.staff.staffId,
                     services:item.services,
                     status:item.status,
                     detailAddress:item.customer.detailAddress
                     }
                 })
             }
             res.json({rows,count:result.count})
        })
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    } catch (e) {
        console.log(e);
    }
}


async function getFilterDistrictServicesTl(req, res) {
    try {
        let {city, district} = req.body;
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
            where: {
                [Op.and]: [
                    {'$Customer.city$': city},
                    {'$Customer.district$': district},
                    {services: 3}
                ]
            },
            attributes:['id','services', 'note','status', 'customerPhone'],
            offset: page,
            limit: limit
        })
        .then(result => {
            {
                rows= result.rows.map((item)=>{
                     return {id:item.id,customerPhone:item.customerPhone,
                     services:item.services,
                     note:item.note,
                     deviceId:item.device.deviceId,
                     name:item.customer.name,
                     city:item.customer.city,
                     district:item.customer.district,
                     wards:item.customer.wards,
                     staffId:item.staff.staffId,
                     services:item.services,
                     status:item.status,
                     detailAddress:item.customer.detailAddress
                     }
                 })
             }
             res.json({rows,count:result.count})
        })
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    } catch (e) {
        console.log(e);
    }
}

async function getFilterWardsServicesTl(req, res) {
    try {
        let {city, district, wards} = req.body;
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
            where: {
                [Op.and]: [
                    {'$Customer.city$': city},
                    {'$Customer.district$': district},
                    {'$Customer.wards$': wards},
                    {services: 3}
                ]
            },
            attributes:['id','services', 'note','status', 'customerPhone'],
            offset: page,
            limit: limit
        })
        .then(result => {
            {
                rows= result.rows.map((item)=>{
                     return {id:item.id,customerPhone:item.customerPhone,
                     services:item.services,
                     note:item.note,
                     deviceId:item.device.deviceId,
                     name:item.customer.name,
                     city:item.customer.city,
                     district:item.customer.district,
                     wards:item.customer.wards,
                     staffId:item.staff.staffId,
                     services:item.services,
                     status:item.status,
                     detailAddress:item.customer.detailAddress
                     }
                 })
             }
             res.json({rows,count:result.count})
        })
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    } catch (e) {
        console.log(e);
    }
}

async function getFilterServicesTl(req, res) {
    try {
        let {search} = req.body;
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
            where: {
                [Op.and]: [
                    {services: 3},
                    {
                        [Op.or]: [
                            {id: {[Op.substring]: search}},
                            {'$Customer.name$': {[Op.substring]: search}},
                            {'$Customer.detailAddress$': {[Op.substring]: search}},
                            {'$Staff.staffId$': {[Op.substring]: search}},
                            {'$Device.deviceId$': {[Op.substring]: search}},
                            {customerPhone: {[Op.substring]: search}},
                            {note: {[Op.substring]: search}},
                        ]
                    }
                ]
            },
            attributes:['id','services', 'note','status', 'customerPhone'],
            offset: page,
            limit: limit
        })
        .then(result => {
            {
                rows= result.rows.map((item)=>{
                     return {id:item.id,customerPhone:item.customerPhone,
                     services:item.services,
                     note:item.note,
                     deviceId:item.device.deviceId,
                     name:item.customer.name,
                     city:item.customer.city,
                     district:item.customer.district,
                     wards:item.customer.wards,
                     staffId:item.staff.staffId,
                     services:item.services,
                     status:item.status,
                     detailAddress:item.customer.detailAddress
                     }
                 })
             }
             res.json({rows,count:result.count})
        })
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    } catch (e) {
        console.log(e);
    }
}

async function getFilterStatusServicesTl(req, res) {
    try {
        let {status} = req.body;
        console
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
                [Op.and]: [
                    {services: 3},
                    {status: status}
                ]
            },
            offset: page,
            limit: limit
        })
        .then(result =>{
            rows= result.rows.map((item)=>{
                return {id:item.id,customerPhone:item.customerPhone,
                services:item.services,
                note:item.note,
                deviceId:item.device.deviceId,
                name:item.customer.name,
                city:item.customer.city,
                district:item.customer.district,
                wards:item.customer.wards,
                staffId:item.staff.staffId,
                services:item.services,
                status:item.status,
                detailAddress:item.customer.detailAddress
                }
            })
            res.json({rows,count:result.count})
        })
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    getFilterCityServicesTl,
    getFilterDistrictServicesTl,
    getFilterWardsServicesTl,
    getFilterServicesTl,
    getFilterStatusServicesTl
}