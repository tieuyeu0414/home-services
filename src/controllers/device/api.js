const Senquelize = require("sequelize");
const Op = Senquelize.Op;
const Device = require("./models/device");
const Customer = require('../customer/models/customer')
const utils = require('../utils')



async function getDataRow(req, res){
    try {
        let {page, limit} = utils.pagination(req.query, 10)
        await Device.findAndCountAll({
            include: [
                {
                    model: Customer, attributes:['phone', 'name']
                }
            ],
            attributes: ['id', 'deviceId', 'statusDevice'],
            offset: page,
            limit: limit
        })
        .then(result => {
             const rows = result.rows.map(item=>{
                 return {id: item.id,
                    deviceId:item.deviceId,
                    statusDevice:item.statusDevice,
                    customerPhone:item.customer.phone,
                    customerName:item.customer.name}
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




async function insertDevice(req, res) {
    try {
        let { deviceId, statusDevice, customerPhone } = req.body;
        let data = await Device.create({
            deviceId,
            statusDevice,
            customerPhone
        });
        let subdata =  await Customer.findAll(
            {
                where: {
                    phone:customerPhone
                },
                attributes:['name'],
            }
            
        );
        return res.status(200).json({
            data:{...data.dataValues,customerName:subdata[0].name}
        })
    } catch (error) {
        console.log(error);
    }
}




async function deleteDevice(req, res) {
    let id = req.params.id;
    let device =  await Device.findAll(
        {
            where: {
                id: id
            },
        }
    );
        
    if(device.length == 0) {
        return res.status(200).json({
            errorMessage:`The device isn't exist!`
        })
    }
    
    try {
        await Device.destroy(
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


async function updateDevice(req, res) {
    let id = req.params.id;
    let { deviceId, statusDevice, customerPhone } = req.body;
    let device =  await Device.findAll(
        {
            where: {
                id: id
            },
        }
    );
    if(device.length == 0) {
        return res.status(200).json({
            errorMessage:`The device isn't exist!`
        })
    }
    try {
        await Device.update({ 
            deviceId,
            statusDevice,
            customerPhone
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


async function getFilterDevice(req, res) {
    try {
        let {search} = req.body;
        let {page, limit} = utils.pagination(req.query, 10)
        await Device.findAndCountAll({
            include: [
                {
                    model: Customer, 
                    attributes:['phone', 'name'],
                    // where: {
                    //     [Op.or]: [
                    //         {phone: {[Op.substring]: search}},
                    //         {name: {[Op.substring]: search}},
                    //     ]

                    // }
                },
            ],
            attributes: ['id', 'deviceId', 'statusDevice'],
            where: {
                [Op.or]: [
                    {id: {[Op.substring]: search}},
                    {deviceId: {[Op.substring]: search}},
                    {'$Customer.phone$': { [Op.substring]: search }},
                    {'$Customer.name$': { [Op.substring]: search }}
                ]
            },
            offset: page,
            limit: limit
        })
        .then(result => {
            const rows = result.rows.map(item=>{
                return {id: item.id,deviceId:item.deviceId,statusDevice:item.statusDevice,customerPhone:item.customer.phone,customerName:item.customer.name}
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
    // getDataDevice,
    insertDevice,
    deleteDevice,
    updateDevice,
    getFilterDevice,
    getDataRow
}