const Senquelize = require("sequelize");
// const Op = Senquelize.Op;
const Device = require("./models/device");
const Customer = require('../customer/models/customer')


async function getDataDevice(req, res){
    try {
        const device = await Device.findAll();
        let data = device;
        res.send(data)
    } catch (e) {
        console.log('lỗi');
    }
}


async function getDataRowDevice(req, res){
    // try {
    //     const device = await Device.findAll();
    //     let data = device;
    //     res.send(data)
    // } catch (e) {
    //     console.log('lỗi');
    // }

    // data = await Device.findAll({
    //     include: [
    //         {
    //             model: Customer,
    //             where: {
    //                 id: customerId
    //             }
    //         }
    //     ]
    // });

     try {
        let data  = await Customer.findAll();
        res.send(data)
    } catch (e) {
        console.log(e);
    }


}



async function insertDevice(req, res) {
    try {
        let { deviceId, statusDevice, customerId } = req.body;
        let data = await Device.create({
            deviceId,
            statusDevice,
            customerId
        });
        return res.status(200).json({
            data
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
    let { deviceId, statusDevice, customerId } = req.body;
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
            customerId
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
        const customer = await Device.findAll()
        // await Customer.findAll({
        //     where: {
        //         [Op.or]: [
        //             {id: search},
        //             {phone: search},
        //             {name: search},
        //             {city: search},
        //             {district: search},
        //             {wards: search},
        //             {detailAddress: search}
        //         ]
        //     }   
        // })
        .then(result => res.json(result.filter(item=>
            item.id === Number(search) ? item : '' ||
            item.deviceId.toLowerCase().indexOf(search.toLowerCase()) !== -1 ? item : ''
        )))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    getDataDevice,
    insertDevice,
    deleteDevice,
    updateDevice,
    getFilterDevice,
    getDataRowDevice
}