const Staff = require('./models/staff')
const { Op } = require("sequelize");
const utils = require('../utils')
const multer = require('multer');
const path = require('path');


async function login(req, res){
    // const {email, password, otp} = req.body;
    const {email, password} = req.body;
    try {
        if (!email || !password)
            res.send('email and password are required');

        let staff = await Staff.findOne({
            where: {email},
        });
        if (!staff || !staff.comparePassword(password))
            res.send('Wrong email or password');

        // if (!otp) {
        //     let otp = totp.generateOTP(staff.uuid);
        //     log.info(staff.uuid);
        //     log.info(otp);
        //     if(config.isSendOTP){
        //         let SMSResult = await eSMS.sendSmsOTP(staff.phoneNumber, otp);
        //         log.info("SEND OTP");
        //         log.info(SMSResult);
        //     }
        //     else {
        //         log.info("No send otp")
        //     }
        //     return response.ok(res, {message: 'Otp sent successfully',
        //                                         otp: otp
        //     });
        // }
        // else {
        //     let check = totp.OTPVerification(otp, staff.uuid);
        //     if(!check)
        //     return response.badRequest(res, "OTP invalid");
        // }

        // let cs = staff.password.slice(staff.password.length - jwtConfig.staff.csLength, staff.password.length);
        // const authToken = getToken({uuid: staff.uuid, cs: cs}, jwtConfig.staff.secret, jwtConfig.staff.life);
        // staff.password = undefined;
        // let staffInfo = Object.assign({authToken}, staff.toJSON());

        // return response.ok(res, staffInfo);
        res.send('ok')
    } catch (error) {
        console.log(error);
    }
}

async function getDataStaff(req, res){
    try {
        let {page, limit} = utils.pagination(req.query, 10)
         Staff.findAll({
            attributes: ['id', 'fullName', 'staffId', 'phoneNumber','avatar', 'city', 'district', 'wards', 'role'],
            where: {
                role: { [Op.notLike]: 6 }
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
        let {fullName, phoneNumber, city, district, wards, role, isActive} = req.body;
        let avatar = req.file.path;

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
        await Staff.findAll({
            attributes: ['id', 'fullName', 'staffId', 'phoneNumber', 'city', 'district', 'wards', 'role'],
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

async function getFilterDistrictStaff(req, res) {
    try {
        let {city, district} = req.body;
        let {page, limit} = utils.pagination(req.query, 10)
        await Staff.findAll({
            attributes: ['id', 'fullName', 'staffId', 'phoneNumber', 'city', 'district', 'wards', 'role'],
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

async function getFilterWardsStaff(req, res) {
    try {
        let {city, district, wards} = req.body;
        let {page, limit} = utils.pagination(req.query, 10)
        await Staff.findAll({
            attributes: ['id', 'fullName', 'staffId', 'phoneNumber', 'city', 'district', 'wards', 'role'],
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

async function getFilterStaff(req, res) {
    try {
        let {search} = req.body;
        let {page, limit} = utils.pagination(req.query, 10)
        await Staff.findAll({
            attributes: ['id', 'fullName', 'staffId', 'phoneNumber', 'city', 'district', 'wards', 'role'],
            where: {
                [Op.or]: [
                    {id: {[Op.substring]: search}},
                    {fullName: {[Op.substring]: search}},
                    {phoneNumber: {[Op.substring]: search}},
                    {staffId: {[Op.substring]: search}},
                    {role: {[Op.substring]: search}},
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
    login,
    getDataStaff,
    setInsertStaff,
    setEditStaff,
    setDeleteStaff,
    getFilterCityStaff,
    getFilterDistrictStaff,
    getFilterWardsStaff,
    getFilterStaff,
    upload,
    storage
}
