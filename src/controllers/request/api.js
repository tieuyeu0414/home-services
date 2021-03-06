const Senquelize = require("sequelize");
const Op = Senquelize.Op;
const Request = require("./models/request");
const Customer = require("../customer/models/customer");
const Device = require("../device/models/device");
const utils = require('../utils');
const Staff = require("../admin/models/staff");




async function getDataRequest(req, res){
    try {
        let {page, limit} = utils.pagination(req.query, 10)
        await Request.findAndCountAll({
            include: [
                { model: Customer, attributes:['name','city', 'district','wards','detailAddress'] },
                { model: Device, attributes:['deviceId'] },
                { model: Staff, attributes:['staffId'] },
            ],
            attributes:['id','services', 'note','status', 'customerPhone'],
            
            offset: page,
            limit: limit
        })
        .then(result =>{
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



async function insertRequest(req, res) {
    try {
        let { customerPhone, deviceId, services, note, status, staffId } = req.body;
        let data = await Request.create({
            customerPhone,
            deviceId,
            services,
            note,
            status,
            staffId
        });
        let subdata =  await Customer.findAll(
            {
                where: {
                    phone:customerPhone
                },
                attributes:['city','district','wards','name'],
            }
            
        );
        return res.status(200).json({
            data:{...data.dataValues,name:subdata[0].name,city:subdata[0].city,district:subdata[0].district,wards:subdata[0].wards}
        })
    } catch (error) {
        console.log(error);
    }
}




async function deleteRequest(req, res) {
    let id = req.params.id;
    let request =  await Request.findAll(
        {
            where: {
                id: id
            },
        }
    );
        
    if(request.length == 0) {
        return res.status(200).json({
            errorMessage:`The request isn't exist!`
        })
    }
    
    try {
        await Request.destroy(
            {
                where: {
                    id: id
                },
                returning: true
            });
        return res.status(200).json({
            message:"Delete success!"
        })
    } catch (e) {
        console.log(e);
    }
    
}


async function updateRequest(req, res) {
    let id = req.params.id;
    let { customerPhone, deviceId, services, note, status, staffId } = req.body;
    let request =  await Request.findAll(
        {
            where: {
                id: id
            },
        }
    );
    if(request.length == 0) {
        return res.status(200).json({
            errorMessage:`The request isn't exist!`
        })
    }
    try {
        await Request.update({ 
            customerPhone,
            deviceId,
            services,
            note,
            status,
            staffId,
         }, {
            where: {
                id: id
            }
        });
        return res.status(200).json({
            message:"Update success!"
        })
    } catch (error) {
        console.log(error);
    }
}



async function getFilterCityRequest(req, res) {
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

async function getFilterDistrictRequest(req, res) {
    try {
        let {city, district} = req.body;
        let {page, limit} = utils.pagination(req.query, 10)
        await Request.findAndCountAll({
            include: [
                { 
                    model: Customer, 
                    attributes:['name','city', 'district','wards','detailAddress'],
                    where: {
                        [Op.and]: [
                            {city: city},
                            {district: district},
                        ]
                    },
                },
                { model: Device, attributes:['deviceId'] },
                { model: Staff, attributes:['staffId'] },
            ],
            attributes:['id','services', 'note','status', 'customerPhone'],
            offset: page,
            limit: limit
        })
        .then(result =>{
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

async function getFilterWardsRequest(req, res) {
    try {
        let {city, district, wards} = req.body;
        let {page, limit} = utils.pagination(req.query, 10)
        await Request.findAndCountAll({
            include: [
                { 
                    model: Customer, 
                    attributes:['name','city', 'district','wards','detailAddress'],
                    where: {
                        [Op.and]: [
                            {city: city},
                            {district: district},
                            {wards: wards}
                        ]
                    },
                },
                { model: Device, attributes:['deviceId'] },
                { model: Staff, attributes:['staffId'] },
            ],
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

async function getFilterRequest(req, res) {
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
            attributes:['id','services', 'note','status', 'customerPhone'],
            where: {
                [Op.or]: [
                    {id: {[Op.substring]: search}},
                    {note: {[Op.substring]: search}},
                    {customerPhone: { [Op.substring]: search }},
                    {'$Customer.name$': { [Op.substring]: search }},
                    {'$Customer.detailAddress$': { [Op.substring]: search }},
                    {'$Device.deviceId$': { [Op.substring]: search }},
                    {'$Staff.staffId$': { [Op.substring]: search }},
                ]
            },
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

async function getFilterStatusRequest(req, res) {
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
                status: status
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
    getDataRequest,
    insertRequest,
    deleteRequest,
    updateRequest,
    getFilterCityRequest,
    getFilterDistrictRequest,
    getFilterWardsRequest,
    getFilterRequest,
    getFilterStatusRequest,
}