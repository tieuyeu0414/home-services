const Staff = require('./models/staff')
const { Op } = require("sequelize");
const utils = require('../utils')
const multer = require('multer');
const path = require('path');
const fs = require('fs');



async function getDataStaff(req, res){
    try {
        let {page, limit} = utils.pagination(req.query, 10)
         Staff.findAndCountAll({
            attributes: ['id', 'fullName', 'staffId', 'phoneNumber','avatar', 'city', 'district', 'wards', 'role'],
            where: {
                role: { [Op.not]: [6] }
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

async function setInsertStaff(req, res){
    try {
        let {email, password, fullName, phoneNumber, staffId, city, district, wards, role} = req.body;
        let avatar = req.file.path; 
        await Staff.create({
            email: email,
            password: password,
            fullName: fullName,
            phoneNumber: phoneNumber,
            staffId: staffId,
            avatar: avatar,
            city: city,
            district: district,
            wards: wards,
            role: role
        })
        .then(result => res.json(result))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    } catch (error) {
        console.log(error);
    }
}

async function setEditStaff(req, res) {
    try {
        let id = req.params.id;
        let getStaff = await Staff.findByPk(id);
        let {fullName, phoneNumber, city, district, wards, role, isActive,avatar} = req.body;
        //let avatar = req.file.path;

        let dataUpdate = {
            fullName: !fullName ? getStaff.fullName : fullName,
            phoneNumber: !phoneNumber ? getStaff.phoneNumber : phoneNumber,
            avatar: !avatar ? getStaff.avatar : avatar,
            city: !city ? getStaff.city : city,
            district: !district ? getStaff.district : district,
            wards: !wards ? getStaff.wards : wards,
            role: !role ? getStaff.role : role,
            isActive: !isActive ? getStaff.isActive : isActive,
        };
        await Staff.update({...dataUpdate},
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

async function setDeleteStaff(req, res) {
    try {
        let id = req.params.id;
    
        await Staff.destroy(
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

async function getFilterCityStaff(req, res) {
    try {
        let {city} = req.body;
        let {page, limit} = utils.pagination(req.query, 10)
        await Staff.findAndCountAll({
            attributes: ['id', 'fullName', 'staffId', 'phoneNumber', 'city', 'district', 'wards', 'role'],
            where: {
                [Op.and]: [
                    {city: city},
                    {role: { [Op.not]: [6] }}
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

async function getFilterDistrictStaff(req, res) {
    try {
        let {city, district} = req.body;
        let {page, limit} = utils.pagination(req.query, 10)
        await Staff.findAndCountAll({
            attributes: ['id', 'fullName', 'staffId', 'phoneNumber', 'city', 'district', 'wards', 'role'],
            where: {
                [Op.and]: [
                    {city: city},
                    {district: district},
                    {role: { [Op.not]: [6] }}
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

async function getFilterWardsStaff(req, res) {
    try {
        let {city, district, wards} = req.body;
        let {page, limit} = utils.pagination(req.query, 10)
        await Staff.findAndCountAll({
            attributes: ['id', 'fullName', 'staffId', 'phoneNumber', 'city', 'district', 'wards', 'role'],
            where: {
                [Op.and]: [
                    {city: city},
                    {district: district},
                    {wards: wards},
                    {role: { [Op.not]: [6] }}
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

async function getFilterStaff(req, res) {
    try {
        let {search} = req.body;
        let {page, limit} = utils.pagination(req.query, 10)
        await Staff.findAndCountAll({
            attributes: ['id', 'fullName', 'staffId', 'phoneNumber', 'city', 'district', 'wards', 'role'],
            where: {
                [Op.and]: [
                    {role: { [Op.not]: [6] }},
                    {
                        [Op.or]: [
                            {id: {[Op.substring]: search}},
                            {fullName: {[Op.substring]: search}},
                            {phoneNumber: {[Op.substring]: search}},
                            {staffId: {[Op.substring]: search}},
                            {role: {[Op.substring]: search}},
                        ]
                    }
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
        const path = 'media/images'
        fs.mkdirSync(path, { recursive: true })
        return cb(null, path)
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
    getDataStaff,
    setInsertStaff,
    setEditStaff,
    setDeleteStaff,
    getFilterCityStaff,
    getFilterDistrictStaff,
    getFilterWardsStaff,
    getFilterStaff,
    upload
}
