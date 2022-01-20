const Senquelize = require("sequelize");
const Op = Senquelize.Op;
const Customer = require("./models/customer");
const utils = require('../utils');
const multer = require('multer');
const path = require('path');



async function getDataCustomer(req, res){
    // res.send('ok')
    try {
        // await Customer.sync({force: true})
        let {page, limit} = utils.pagination(req.query, 10)
        await Customer.findAll({
            attributes: ['id', 'phone', 'name', 'avatar', 'city', 'district', 'wards', 'detailAddress'],
            offset: page,
            limit: limit
        })
        .then(result => res.json(result)) 
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    } catch (e) {
        console.log('lỗi');
    }
}

async function setInsertCustomer(req, res) {
    try {
        let {phone, name, city, district, wards, detailAddress} = req.body;
        let avatar = req.file.path;
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
        let {phone, name, city, district, wards, detailAddress, status} = req.body;
        let avatar = req.file.path;

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
        let {page, limit} = utils.pagination(req.query, 10)
        await Customer.findAll({
            attributes: ['id', 'phone', 'name', 'avatar', 'city', 'district', 'wards', 'detailAddress'],
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

async function getFilterDistrictCustomer(req, res) {
    try {
        let {city, district} = req.body;
        let {page, limit} = utils.pagination(req.query, 10)
        await Customer.findAll({
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

async function getFilterWardsCustomer(req, res) {
    try {
        let {city, district, wards} = req.body;
        let {page, limit} = utils.pagination(req.query, 10)
        await Customer.findAll({
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

async function getFilterCustomer(req, res) {
    try {
        let {search} = req.body;
        let {page, limit} = utils.pagination(req.query, 10)
        await Customer.findAll({
            attributes: ['id', 'phone', 'name', 'avatar', 'city', 'district', 'wards', 'detailAddress'],
            where: {
                [Op.or]: [
                    {id: {[Op.substring]: search}},
                    {phone: {[Op.substring]: search}},
                    {name: {[Op.substring]: search}},
                    {detailAddress: {[Op.substring]: search}},
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



//UPLOAD CONTROLLER

const storage = multer.diskStorage({
    destination: (req, file, cb)=> {
        cb(null, 'media/images')
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname))
    }
})

const upload = multer({
    storage: storage,
    limits: {fileSize: '100000'},
    fileFilter: (req, file, cb) => {
        const fileTypes = /jpeg|jpg|png|gif/
        const mimType = fileTypes.test(file.mimetype)
        const extname = fileTypes.test(path.extname(file.originalname))

        if(mimType && extname) {
            return cb(null, true)
        }
        cb('Give proper files formate to upload')
    }
}).single('avatar')


module.exports = {
    getDataCustomer,
    setInsertCustomer,
    setEditCustomer,
    setDeleteCustomer,
    getFilterCityCustomer,
    getFilterDistrictCustomer,
    getFilterWardsCustomer,
    getFilterCustomer,
    upload,
    storage
}