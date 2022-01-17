const Senquelize = require("sequelize");
const Op = Senquelize.Op;
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
        let {phone, name, avatar, city, district, wards, detailAddress} = req.body;
        await Customer.create({
            // id: 1,
            phone: phone,
            name: name,
            avatar: avatar,
            city: city,
            district: district,
            wards: wards,
            detailAddress: detailAddress,
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
        let {phone, name, avatar, city, district, wards, detailAddress, status} = req.body;

        let dataUpdate = {
            phone: !phone ? getCustomer.phone : phone,
            name: !name ? getCustomer.name : name,
            avatar: !avatar ? getCustomer.avatar : avatar,
            city: !city ? getCustomer.city : city,
            district: !district ? getCustomer.district : district,
            wards: !wards ? getCustomer.wards : wards,
            detailAddress: !detailAddress ? getCustomer.detailAddress : detailAddress,
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

async function getFilterCityCustomer(req, res) {
    try {
        let {city} = req.body;
    
        await Customer.findAll({
            where: {city: city}
        })
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    } catch (e) {
        console.log(e);
    }
}

async function getFilterDistrictCustomer(req, res) {
    try {
        let {city, district} = req.body;
    
        await Customer.findAll({
            where: {
                [Op.and]: [
                    {city: city},
                    {district: district},
                ]
            }
        })
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    } catch (e) {
        console.log(e);
    }
}

async function getFilterWardsCustomer(req, res) {
    try {
        let {city, district, wards} = req.body;
    
        await Customer.findAll({
            where: {
                [Op.and]: [
                    {city: city},
                    {district: district},
                    {wards: wards}
                ]
            }
        })
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    } catch (e) {
        console.log(e);
    }
}

async function getFilterCustomer(req, res) {
    try {
        let {search} = req.body;
        const customer = await Customer.findAll()
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

async function getPagination(req, res) {
    try {
        let offset = req.params.offset;
        await Customer.findAndCountAll({
            offset: 1,
            limit: 1
        })
        .then(result => res.json(result.rows))
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
    setDeleteCustomer,
    getFilterCityCustomer,
    getFilterDistrictCustomer,
    getFilterWardsCustomer,
    getFilterCustomer,
    getPagination
}