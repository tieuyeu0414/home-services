const Senquelize = require("sequelize")
const Request = require("./models/request");
const Customer = require("../customer/models/customer");
const Device = require("../device/models/device");
const utils = require('../utils')



async function getDataRequest(req, res){
    try {
        let {page, limit} = utils.pagination(req.query, 10)
        await Request.findAll({
            include: [
                { model: Customer, attributes:['name','city', 'district','wards','detailAddress'] },
                { model: Device, attributes:['deviceId'] },
            ],
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



async function insertRequest(req, res) {
    try {
        let { customerId, deviceId, serviceId, note, status, staffId } = req.body;
        let data = await Request.create({
            customerId,
            deviceId,
            serviceId,
            note,
            status,
            staffId
        });
        return res.status(200).json({
            data
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
    let { customerId, deviceId, serviceId, note, status, staffId } = req.body;
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
            customerId,
            deviceId,
            serviceId,
            note,
            status,
            staffId
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
        await Request.findAll({
            where: {city: city},
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

async function getFilterDistrictRequest(req, res) {
    try {
        let {city, district} = req.body;
        let {page, limit} = utils.pagination(req.query, 10)
        await Request.findAll({
            attributes: ['id', 'phone', 'name', 'avatar', 'city', 'district', 'wards', 'detailAddress'],
            where: {
                [Op.and]: [
                    {city: city},
                    {district: district},
                ]
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

async function getFilterWardsRequest(req, res) {
    try {
        let {city, district, wards} = req.body;
        let {page, limit} = utils.pagination(req.query, 10)
        await Request.findAll({
            attributes: ['id', 'phone', 'name', 'avatar', 'city', 'district', 'wards', 'detailAddress'],
            where: {
                [Op.and]: [
                    {city: city},
                    {district: district},
                    {wards: wards}
                ]
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

async function getFilterRequest(req, res) {
    try {
        let {search} = req.body;
        let {page, limit} = utils.pagination(req.query, 10)
        await Request.findAll({
            attributes: ['id', 'phone', 'name', 'avatar', 'city', 'district', 'wards', 'detailAddress'],
            offset: page,
            limit: limit
        })
        .then(result => res.json(result.filter(item=>
            item.id === Number(search) ? item : '' ||
            item.phone.toLowerCase().indexOf(search.toLowerCase()) !== -1 ? item : '' ||
            item.name.toLowerCase().indexOf(search.toLowerCase()) !== -1 ? item : '' || 
            item.detailAddress.toLowerCase().indexOf(search.toLowerCase()) !== -1 ? item : ''
        )))
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
}