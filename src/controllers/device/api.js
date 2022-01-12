const Senquelize = require("sequelize");
// const Op = Senquelize.Op;
const Device = require("./models/device");


async function getDataDevice(req, res){
    res.send('ok')
    try {
        //await Customer.sync({force: true})
        const device = await Device.findAll();
        let data = device;
        res.send(data)
    } catch (e) {
        console.log('lỗi');
    }
}



async function insertDevice(req, res) {
    try {
        let { deviceId, statusDevice, customerId } = req.body;
        await Device.create({
            deviceId,
            statusDevice,
            customerId
        });
        res.send(dataCreate)  
    } catch (error) {
        console.log('lỗi');
    }
}

module.exports = {
    getDataDevice,
    insertDevice,
}