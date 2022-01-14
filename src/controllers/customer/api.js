const Senquelize = require("sequelize");
// const Op = Senquelize.Op;
const Customer = require("./models/customer");



async function getDataCustomer(req, res){
    // res.send('ok')
    try {
        // await Customer.sync({force: true})
        const customer = await Customer.findAll()
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
        // let data = customer
        // console.log(data);
        // res.send(data)
    } catch (e) {
        console.log('lỗi');
    }
}

async function setInsertCustomer(req, res) {
    try {
        let {phone, name, deviceId, avatar, city, district, wards, detailAdress, status} = req.body;
        await Customer.create({
            // id: 1,
            phone: phone,
            name: name,
            deviceId: deviceId,
            avatar: avatar,
            city: city,
            district: district,
            wards: wards,
            detailAdress: detailAdress,
        })
        // console.log(JSON.stringify(createCustomer));
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    } catch (error) {
        console.log(error);
    }
}

async function setEditCustomer(req, res) {
    try {
        let id = req.params.id;
        let getCustomer = await Customer.findByPk(id);
        let {phone, name, deviceId, avatar, city, district, wards, detailAdress, status} = req.body;

        let dataUpdate = {
            phone: !phone ? getCustomer.phone : phone,
            name: !name ? getCustomer.name : name,
            deviceId: !deviceId ? getCustomer.deviceId : deviceId,
            avatar: !avatar ? getCustomer.avatar : avatar,
            city: !city ? getCustomer.city : city,
            district: !district ? getCustomer.district : district,
            wards: !wards ? getCustomer.wards : wards,
            detailAdress: !detailAdress ? getCustomer.detailAdress : detailAdress,
            status: !status ? getCustomer.status : status
        };
        await Customer.update({...dataUpdate},
            {
                where: {
                    id: id
                },
                returning: true
            })
            .then(result => res.sendStatus(204))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    } catch (e) {
        console.log(e);
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
            })
            .then(result => res.sendStatus(204))
            .catch(error => {
                res.status(412).json({msg: error.message});
            });
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    getDataCustomer,
    setInsertCustomer,
    setEditCustomer,
    setDeleteCustomer
}