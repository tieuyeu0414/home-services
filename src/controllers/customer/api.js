const Senquelize = require("sequelize");
// const Op = Senquelize.Op;
const Customer = require("./models/customer");

async function getDataCustomer(req, res){
    // res.send('ok')
    try {
        // await Customer.sync({force: true})
        const customer = await Customer.findAll();
        let data = JSON.stringify(customer)
        // console.log(data);
        res.send(data)
    } catch (e) {
        console.log('lỗi');
    }
}

async function setInsertCustomer(req, res) {
    try {
        let data = {
            phone: 'phone',
            name: 'name564',
            deviceId: ["ok", "detail"],
            avatar: 'avatar',
            city: 'city',
            district: 'district',
            wards: 'wards',
            detailAdress: 'detailAdress',
            status: 1
        }
        //validate
        // let {phone, name, deviceId, avatar, city, district, wards, detailAdress, status} = req.body;
        await Customer.create({
            // id: 1,
            phone: data.phone,
            name: data.name,
            deviceId: data.deviceId[0],
            avatar: data.avatar,
            city: data.city,
            district: data.district,
            wards: data.wards,
            detailAdress: data.detailAdress,
            status: data.status
        });
        // console.log(JSON.stringify(createCustomer));
        // console.log('ok');
        res.send(data)
    } catch (error) {
        console.log('lỗi');
    }
}

module.exports = {
    getDataCustomer,
    setInsertCustomer
}