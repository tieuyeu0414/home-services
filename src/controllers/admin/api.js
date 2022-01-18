const Staff = require('./models/staff')
const { Op } = require("sequelize");
const utils = require('../utils')

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
        let {offset, limit} = utils.pagination(req.query, 10)
        const customer = await Staff.findAll({
            attributes: ['id', 'fullName', 'staffId', 'phoneNumber', 'city', 'district', 'wards', 'role'],
            where: {
                role: { [Op.notLike]: 6 }
            },
            offset: offset,
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
        let {email, password, fullName, phoneNumber, staffId, avatar, city, district, wards, role} = req.body;
        await Staff.create({
            // id: 1,
            email: email,
            password: password,
            fullName: fullName,
            phoneNumber: phoneNumber,
            staffId: staffId,
            avatar: avatar,
            city: city,
            district: district,
            wards: wards,
            role: role,
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
        let {fullName, phoneNumber, avatar, city, district, wards, role} = req.body;

        let dataUpdate = {
            fullName: !fullName ? getStaff.fullName : fullName,
            phoneNumber: !phoneNumber ? getStaff.phoneNumber : phoneNumber,
            avatar: !avatar ? getStaff.avatar : avatar,
            city: !city ? getStaff.city : city,
            district: !district ? getStaff.district : district,
            wards: !wards ? getStaff.wards : wards,
            role: !role ? getStaff.role : role,
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
        let {offset, limit} = utils.pagination(req.query, 10)
        await Staff.findAll({
            attributes: ['id', 'fullName', 'staffId', 'phoneNumber', 'city', 'district', 'wards', 'role'],
            where: {city: city},
            offset: offset,
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
        let {offset, limit} = utils.pagination(req.query, 10)
        await Staff.findAll({
            attributes: ['id', 'fullName', 'staffId', 'phoneNumber', 'city', 'district', 'wards', 'role'],
            where: {
                [Op.and]: [
                    {city: city},
                    {district: district},
                ]
            },
            offset: offset,
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
        let {offset, limit} = utils.pagination(req.query, 10)
        await Staff.findAll({
            attributes: ['id', 'fullName', 'staffId', 'phoneNumber', 'city', 'district', 'wards', 'role'],
            where: {
                [Op.and]: [
                    {city: city},
                    {district: district},
                    {wards: wards}
                ]
            },
            offset: offset,
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
        let {offset, limit} = utils.pagination(req.query, 10)
        await Staff.findAll({
            attributes: ['id', 'fullName', 'staffId', 'phoneNumber', 'city', 'district', 'wards', 'role'],
            offset: offset,
            limit: limit
        })
        .then(result => res.json(result.filter(item=>
            item.id === Number(search) ? item : '' ||
            item.phoneNumber.toLowerCase().indexOf(search.toLowerCase()) !== -1 ? item : '' ||
            item.fullName.toLowerCase().indexOf(search.toLowerCase()) !== -1 ? item : '' || 
            item.staffId.toLowerCase().indexOf(search.toLowerCase()) !== -1 ? item : ''
        )))
        .catch(error => {
            res.status(412).json({msg: error.message});
        });
    } catch (e) {
        console.log(e);
    }
}

module.exports = {
    login,
    getDataStaff,
    setInsertStaff,
    setEditStaff,
    setDeleteStaff,
    getFilterCityStaff,
    getFilterDistrictStaff,
    getFilterWardsStaff,
    getFilterStaff
}
