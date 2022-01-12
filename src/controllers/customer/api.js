const Senquelize = require("sequelize");
// const Op = Senquelize.Op;
const Customer = require("./models/customer");
// const db = require("../../../sequelizeAuto/models/index");

async function getDataCustomer(req, res){
    // res.send('ok')
    try {
        // await Customer.sync({force: true})
        const customer = await Customer.findAll();
        let data = customer;
        // console.log(data);
        res.send(data)
    } catch (e) {
        console.log(e);
    }
}

async function setInsertCustomer(req, res) {
    try {
        let {phone, name, deviceId, avatar, city, district, wards, detailAdress, status} = req.body;
        await Customer.create({
            // id: 1,
            phone: phone,
            name: name,
            deviceId: deviceId[0],
            avatar: avatar,
            city: city,
            district: district,
            wards: wards,
            detailAdress: detailAdress,
            status: status
        });
        res.send(dataCreate)  
    } catch (error) {
        console.log('lỗi');
    }
}

async function setEditCustomer(req, res) {
    try {
        let id = req.params.id;
        let getCustomer = await Customer.findByPk(id);
        // let {name, ownerName, code, email, image, address} = req.body;
        let update1 = {
            name: 'name564',
            deviceId: ["ok", "detail"],
            avatar: 'avatar',
            district: 'district',
            detailAdress: 'detailAdress',
            status: 1
        }
        let dataUpdate = {
            phone: !update1.phone ? getCustomer.phone : 'phone1',
            name: !update1.name ? getCustomer.name : 'name5642',
            deviceId: !update1.deviceId ? getCustomer.deviceId : ["ok", "detail"],
            avatar: !update1.avatar ? getCustomer.avatar : 'avatar3',
            city: !update1.city ? getCustomer.city : 'city4',
            district: !update1.district ? getCustomer.district : 'district5',
            wards: !update1.wards ? getCustomer.wards : 'wards6',
            detailAdress: !update1.detailAdress ? getCustomer.detailAdress : 'detailAdress7',
            status: !update1.status ? getCustomer.status : 1
        };
        await Customer.update({...dataUpdate},
            {
                where: {
                    id: id
                },
                returning: true
            });
        res.send(dataUpdate)
    } catch (e) {
        console.log('lỗi');
    }
}

async function setDeleteCustomer(req, res) {
    try {
        let id = req.params.id;
    
        await Customer.destroy(
            {
                where: {
                    id: id
                },
                returning: true
            });
        res.send('đã xóa')
    } catch (e) {
        console.log('lỗi');
    }
}

module.exports = {
    getDataCustomer,
    setInsertCustomer,
    setEditCustomer,
    setDeleteCustomer
}